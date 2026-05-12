import { useEffect, useState } from 'react'
import SidebarProfile from './SidebarProfile'
import './Sidebar.css'

export default function Sidebar({ profile }) {
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(min-width: 600px)').matches
  })

  useEffect(() => {
    document.body.classList.toggle('sidebar-open', expanded)
    return () => {
      document.body.classList.remove('sidebar-open')
    }
  }, [expanded])

  const toggle = () => setExpanded((v) => !v)

  return (
    <>
      <aside
        className={`sidebar ${expanded ? 'is-expanded' : 'is-collapsed'}`}
        aria-label="Primary"
      >
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-toggle"
            onClick={toggle}
            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-expanded={expanded}
          >
            <svg
              className="sidebar-toggle-chevron"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                d={expanded ? 'M10 4 L6 8 L10 12' : 'M6 4 L10 8 L6 12'}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sidebar-toggle-hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <h1 className="sidebar-title">Language Learner</h1>
        </header>

        <nav className="sidebar-nav" aria-label="Sections">
          {/* Nav items will be added as features land */}
        </nav>

        <SidebarProfile profile={profile} />
      </aside>

      <button
        type="button"
        className="sidebar-backdrop"
        aria-label="Close sidebar"
        tabIndex={expanded ? 0 : -1}
        onClick={() => setExpanded(false)}
      />
    </>
  )
}
