import { formatCurrency } from '../utils/formatCurrency'

function SummaryItem({ label, value, highlight = false }) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight
          ? 'bg-emerald-500/15 ring-1 ring-emerald-500/30'
          : 'bg-slate-800/60 ring-1 ring-slate-700/50'
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p>
      <p
        className={`mt-1 text-2xl font-bold tabular-nums ${
          highlight ? 'text-emerald-400' : 'text-white'
        }`}
      >
        {formatCurrency(value)}
      </p>
    </div>
  )
}

export default function Summary({ tipAmount, totalAmount, perPerson }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <SummaryItem label="Napiwek" value={tipAmount} />
      <SummaryItem label="Suma całkowita" value={totalAmount} />
      <SummaryItem label="Do zapłaty na osobę" value={perPerson} highlight />
    </div>
  )
}
