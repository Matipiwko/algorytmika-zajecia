export default function BillInput({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label htmlFor="bill-amount" className="block text-sm font-medium text-slate-300">
        Kwota rachunku
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          zł
        </span>
        <input
          id="bill-amount"
          type="number"
          min="0"
          step="0.01"
          inputMode="decimal"
          placeholder="0,00"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-3.5 pl-11 pr-4 text-lg font-medium text-white placeholder:text-slate-600 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>
    </div>
  )
}
