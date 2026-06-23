export default function TipSlider({ value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="tip-slider" className="text-sm font-medium text-slate-300">
          Napiwek
        </label>
        <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-sm font-semibold text-emerald-400">
          {value}%
        </span>
      </div>
      <input
        id="tip-slider"
        type="range"
        min="0"
        max="30"
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-thumb h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-emerald-400"
      />
      <div className="flex justify-between text-xs text-slate-500">
        <span>0%</span>
        <span>30%</span>
      </div>
    </div>
  )
}
