import { useState } from "react";

function LoginScreen({ onLogin, onBack, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = email.trim() && password.trim();

  return (
    <div className="screen auth-screen">
      <h1 className="auth-title">Signin to your<br />PopX account</h1>
      <p className="auth-sub">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <div className="field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="error-msg">{error}</p>}

      <div className="btn-row">
        <button
          className={`btn ${canSubmit ? "btn-primary" : "btn-disabled"}`}
          onClick={() => canSubmit && onLogin(email, password)}
          disabled={!canSubmit}
        >
          Login
        </button>
        <button className="btn btn-secondary" style={{ marginTop: 12 }} onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;