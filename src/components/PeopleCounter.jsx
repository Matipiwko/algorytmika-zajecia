export default function PeopleCounter({ count, onIncrement, onDecrement }) {
  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-slate-300">Liczba osób</span>
      <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 p-2">
        <button
          type="button"
          onClick={onDecrement}
          disabled={count <= 1}
          aria-label="Zmniejsz liczbę osób"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-xl font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          −
        </button>
        <span className="text-2xl font-semibold tabular-nums text-white">{count}</span>
        <button
          type="button"
          onClick={onIncrement}
          aria-label="Zwiększ liczbę osób"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-xl font-medium text-white transition hover:bg-slate-700"
        >
          +
        </button>
      </div>
    </div>
  )
}
