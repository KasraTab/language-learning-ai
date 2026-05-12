export default function SidebarProfile({ profile }) {
  return (
    <footer className="sidebar-footer">
      <div className="sidebar-avatar" aria-hidden="true">
        {profile.initials}
      </div>
      <div className="sidebar-profile">
        <span className="sidebar-profile-name">{profile.name}</span>
        <span className="sidebar-profile-tag">{profile.tag}</span>
      </div>
    </footer>
  )
}
