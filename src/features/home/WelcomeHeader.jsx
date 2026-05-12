import { greetings, motivationalSubtitles } from '../../data/dashboard'
import { user } from '../../data/user'

function getGreeting(hour) {
  if (hour < 12) return greetings.morning
  if (hour < 18) return greetings.afternoon
  return greetings.evening
}

function pickSubtitle(date) {
  const dayOfYear = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 86_400_000,
  )
  return motivationalSubtitles[dayOfYear % motivationalSubtitles.length]
}

export default function WelcomeHeader() {
  const now = new Date()
  const greeting = getGreeting(now.getHours())
  const firstName = user.name.split(' ')[0]
  const subtitle = pickSubtitle(now)

  return (
    <header className="welcome-header">
      <p className="welcome-greeting">{greeting},</p>
      <h1 className="welcome-title">{firstName} 👋</h1>
      <p className="welcome-subtitle">{subtitle}</p>
    </header>
  )
}
