import { useTipCalculator } from '../hooks/useTipCalculator'
import BillInput from './BillInput'
import PeopleCounter from './PeopleCounter'
import Summary from './Summary'
import TipSlider from './TipSlider'

export default function TipCalculator() {
  const {
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
  } = useTipCalculator()

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-700/60 bg-slate-900/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Kalkulator Napiwków
        </h1>
        <p className="mt-2 text-sm text-slate-400">Podziel rachunek szybko i wygodnie</p>
      </header>

      <div className="space-y-6">
        <BillInput value={billAmount} onChange={setBillAmount} />
        <TipSlider value={tipPercent} onChange={setTipPercent} />
        <PeopleCounter
          count={people}
          onIncrement={incrementPeople}
          onDecrement={decrementPeople}
        />
      </div>

      <div className="mt-8 border-t border-slate-700/60 pt-6">
        <Summary tipAmount={tipAmount} totalAmount={totalAmount} perPerson={perPerson} />
      </div>
    </div>
  )
}
