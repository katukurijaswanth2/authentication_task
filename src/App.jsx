import { useState, useEffect } from "react";
import WelcomeScreen from "./authentication/WelcomeScreen";
import LoginScreen from "./authentication/LoginScreen";
import RegisterScreen from "./authentication/RegisterScreen";
import AccountScreen from "./authentication/AccountScreen";
import { getSession, saveSession, clearSession, getUsers, saveUsers } from "./utils/authHelpers";

import "./App.css"; 

function App() {
  const [screen, setScreen] = useState("welcome");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const session = getSession();
    if (session) {
      setCurrentUser(session);
      setScreen("account");
    }
  }, []);

  const handleLogin = (email, password) => {
    setError("");
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    saveSession(user);
    setCurrentUser(user);
    setScreen("account");
  };

  const handleRegister = (form) => {
    setError("");
    const users = getUsers();

    if (users.find(u => u.email.toLowerCase() === form.email.toLowerCase())) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = { ...form, avatar: null, id: Date.now().toString() };
    saveUsers([...users, newUser]);
    saveSession(newUser);
    setCurrentUser(newUser);
    setScreen("account");
  };

  const handleLogout = () => {
    clearSession();
    setCurrentUser(null);
    setScreen("welcome");
    setError("");
  };

  const changeScreen = (s) => {
    setError("");
    setScreen(s);
  };

  return (
    <div className="app-shell">
      <div className="phone">
        {screen === "welcome" && (
          <WelcomeScreen
            onCreateAccount={() => changeScreen("register")}
            onLogin={() => changeScreen("login")}
          />
        )}

        {screen === "login" && (
          <LoginScreen
            onLogin={handleLogin}
            onBack={() => changeScreen("welcome")}
            error={error}
          />
        )}

        {screen === "register" && (
          <RegisterScreen
            onRegister={handleRegister}
            onBack={() => changeScreen("welcome")}
            error={error}
          />
        )}

        {screen === "account" && currentUser && (
          <AccountScreen user={currentUser} onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default App;