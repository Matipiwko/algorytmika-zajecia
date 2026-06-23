import { useMemo, useState } from 'react'

const DEFAULT_TIP = 10
const MIN_PEOPLE = 1

export function useTipCalculator() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercent, setTipPercent] = useState(DEFAULT_TIP)
  const [people, setPeople] = useState(MIN_PEOPLE)

  const bill = parseFloat(billAmount) || 0

  const { tipAmount, totalAmount, perPerson } = useMemo(() => {
    const tip = bill * (tipPercent / 100)
    const total = bill + tip
    const perPersonValue = people > 0 ? total / people : total

    return {
      tipAmount: tip,
      totalAmount: total,
      perPerson: perPersonValue,
    }
  }, [bill, tipPercent, people])

  const incrementPeople = () => setPeople((prev) => prev + 1)
  const decrementPeople = () => setPeople((prev) => Math.max(MIN_PEOPLE, prev - 1))

  return {
    billAmount,
    setBillAmount,
    tipPercent,
    setTipPercent,
    people,
    incrementPeople,
    decrementPeople,
    tipAmount,
    totalAmount,
    perPerson,
  }
}
