import { DEFAULT_AVATAR } from "../utils/authHelpers";

function AccountScreen({ user, onLogout }) {
  return (
    <div className="screen settings-screen">
      <h2 className="settings-title">Account Settings</h2>
      <div className="profile-card">
        <div className="profile-top">
          <div className="avatar-wrap">
            <img
              className="avatar-img"
              src={user.avatar || DEFAULT_AVATAR}
              alt={user.name}
              onError={(e) => { e.target.src = DEFAULT_AVATAR; }}
            />
            <div className="avatar-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4zm6.4-9.6h-1.5L15.6 4H8.4L7.1 5.6H5.6A2.4 2.4 0 0 0 3.2 8v9.6A2.4 2.4 0 0 0 5.6 20h12.8a2.4 2.4 0 0 0 2.4-2.4V8a2.4 2.4 0 0 0-2.4-2.4z" />
              </svg>
            </div>
          </div>
          <div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
          </div>
        </div>
        <div className="divider" />
        <p className="profile-bio">
          {user.company
            ? `${user.name} works at ${user.company}. ${user.isAgency ? "Agency account." : "Individual account."} Lorem ipsum dolor sit amet...`
            : "Lorem Ipsum Dolor Sit Amet..."}
        </p>
      </div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default AccountScreen;