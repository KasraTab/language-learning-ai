import { Link } from 'react-router'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { currentLesson } from '../../data/dashboard'

export default function ContinueLearningCard() {
  const {
    title,
    language,
    unit,
    lessonNumber,
    progressPct,
    estimatedMinutesLeft,
    href,
  } = currentLesson

  return (
    <section
      className="continue-card"
      aria-labelledby="continue-card-title"
    >
      <div className="continue-card-text">
        <p className="continue-card-eyebrow">Continue learning</p>
        <h2 id="continue-card-title" className="continue-card-title">
          {title}
        </h2>
        <p className="continue-card-meta">
          {language} · Unit {unit} · Lesson {lessonNumber}
        </p>
      </div>

      <Link to={href} className="continue-card-cta">
        Resume lesson
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M3 8 H13 M9 4 L13 8 L9 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div className="continue-card-progress">
        <ProgressBar
          value={progressPct}
          max={100}
          label={`${progressPct}% complete`}
        />
        <p className="continue-card-progress-text">
          {progressPct}% complete · ~{estimatedMinutesLeft} min left
        </p>
      </div>
    </section>
  )
}
