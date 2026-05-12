import './ProgressBar.css'

export default function ProgressBar({ value, max, label }) {
  const safeMax = max > 0 ? max : 1
  const pct = Math.max(0, Math.min(100, (value / safeMax) * 100))

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
    >
      <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}
