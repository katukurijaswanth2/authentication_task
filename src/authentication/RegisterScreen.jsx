import { useState } from "react";

function RegisterScreen({ onRegister, onBack, error }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: true,
  });

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const canSubmit = form.name && form.phone && form.email && form.password;

  return (
    <div className="screen auth-screen">
      <h1 className="auth-title">Create your<br />PopX account</h1>

      <div className="field">
        <label>Full Name<span className="req">*</span></label>
        <input placeholder="Marry Doe" value={form.name} onChange={(e) => set("name", e.target.value)} />
      </div>

      <div className="field">
        <label>Phone number<span className="req">*</span></label>
        <input placeholder="+91 00000 00000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
      </div>

      <div className="field">
        <label>Email address<span className="req">*</span></label>
        <input type="email" placeholder="marry@gmail.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
      </div>

      <div className="field">
        <label>Password <span className="req">*</span></label>
        <input type="password" placeholder="••••••••" value={form.password} onChange={(e) => set("password", e.target.value)} />
      </div>

      <div className="field">
        <label>Company name</label>
        <input placeholder="Acme Inc." value={form.company} onChange={(e) => set("company", e.target.value)} />
      </div>

      <p className="agency-label">Are you an Agency?<span className="req">*</span></p>
      <div className="radio-group" style={{ marginBottom: 8 }}>
        {[true, false].map((val) => (
          <label className="radio-label" key={String(val)}>
            <input type="radio" checked={form.isAgency === val} onChange={() => set("isAgency", val)} />
            <span className={`radio-dot${form.isAgency === val ? " checked" : ""}`} />
            {val ? "Yes" : "No"}
          </label>
        ))}
      </div>

      {error && <p className="error-msg" style={{ marginTop: 8 }}>{error}</p>}

      <div className="btn-row">
        <button
          className={`btn ${canSubmit ? "btn-primary" : "btn-disabled"}`}
          onClick={() => canSubmit && onRegister(form)}
          disabled={!canSubmit}
        >
          Create Account
        </button>
        <button className="btn btn-secondary" style={{ marginTop: 12 }} onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default RegisterScreen;