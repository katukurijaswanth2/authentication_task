function WelcomeScreen({ onCreateAccount, onLogin }) {
  return (
    <div className="screen welcome-screen">
      <h1 className="welcome-title">Welcome to PopX</h1>
      <p className="welcome-sub">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
      <button className="btn btn-primary" onClick={onCreateAccount}>
        Create Account
      </button>
      <button className="btn btn-secondary" onClick={onLogin}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default WelcomeScreen;