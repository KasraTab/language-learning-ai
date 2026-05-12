import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import SidebarProfile from './SidebarProfile'
import './Sidebar.css'

const NAV_ITEMS = [
  {
    to: '/',
    label: 'Home',
    end: true,
    icon: (
      <path
        d="M3 9.5 L10 3.5 L17 9.5 V16 a1 1 0 0 1 -1 1 h-3 v-5 h-4 v5 H5 a1 1 0 0 1 -1 -1 z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: '/lessons',
    label: 'Lessons',
    icon: (
      <path
        d="M5 3 h8 a2 2 0 0 1 2 2 v12 H7 a2 2 0 0 1 -2 -2 z M5 15 a2 2 0 0 0 2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: '/vocabulary',
    label: 'Vocabulary',
    icon: (
      <>
        <path
          d="M3.5 14.5 L7 5.5 L10.5 14.5 M4.5 12 H9.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 9 a2.5 2.5 0 1 0 0 5 a2.5 2.5 0 1 0 0 -5 M16.5 14.5 V9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    to: '/quizzes',
    label: 'Quizzes',
    icon: (
      <>
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.5 8 a2.5 2.5 0 1 1 4 2 L10 11.5 M10 14 v0.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    to: '/progress',
    label: 'Progress',
    icon: (
      <path
        d="M4 16 V12 M10 16 V6 M16 16 V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    ),
  },
]

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
  const collapseOnMobile = () => {
    if (window.matchMedia('(max-width: 600px)').matches) setExpanded(false)
  }

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
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={collapseOnMobile}
              className={({ isActive }) =>
                `sidebar-nav-link${isActive ? ' is-active' : ''}`
              }
            >
              <svg
                className="sidebar-nav-icon"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span className="sidebar-nav-label">{item.label}</span>
            </NavLink>
          ))}
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
