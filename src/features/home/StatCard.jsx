export default function StatCard({ icon, label, value, unit, footer }) {
  return (
    <article className="stat-card">
      <header className="stat-card-header">
        <span className="stat-card-icon" aria-hidden="true">
          {icon}
        </span>
        <span className="stat-card-label">{label}</span>
      </header>
      <div className="stat-card-body">
        <span className="stat-card-value">{value}</span>
        {unit ? <span className="stat-card-unit">{unit}</span> : null}
      </div>
      {footer ? <div className="stat-card-footer">{footer}</div> : null}
    </article>
  )
}
