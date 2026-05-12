import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { dashboardStats } from '../../data/dashboard'
import StatCard from './StatCard'

const FlameIcon = (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <path
      d="M10 2 C 13 4 15 8 15 12 a 5 5 0 0 1 -10 0 C 5 8 8 6 10 2 Z"
      fill="currentColor"
    />
  </svg>
)

const TargetIcon = (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <circle
      cx="10"
      cy="10"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="10"
      cy="10"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
  </svg>
)

const SparkleIcon = (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <path
      d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z"
      fill="currentColor"
    />
  </svg>
)

export default function DashboardStats() {
  const { streak, dailyGoal, wordsMasteredThisWeek } = dashboardStats
  const goalPct = Math.round(
    (dailyGoal.minutesCompleted / dailyGoal.minutesTarget) * 100,
  )

  return (
    <section className="dashboard-stats" aria-label="Today's stats">
      <StatCard
        icon={FlameIcon}
        label="Current streak"
        value={streak.days}
        unit="days"
      />
      <StatCard
        icon={TargetIcon}
        label="Today's goal"
        value={`${dailyGoal.minutesCompleted}/${dailyGoal.minutesTarget}`}
        unit="min"
        footer={
          <ProgressBar
            value={dailyGoal.minutesCompleted}
            max={dailyGoal.minutesTarget}
            label={`${goalPct}% of daily goal`}
          />
        }
      />
      <StatCard
        icon={SparkleIcon}
        label="Words mastered"
        value={wordsMasteredThisWeek}
        unit="this week"
      />
    </section>
  )
}
