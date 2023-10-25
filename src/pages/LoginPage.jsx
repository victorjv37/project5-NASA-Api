import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState("");

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userLogin);
  };

  return (
    <div>
      <h2 id="subtitle">CREATE YOUR API KEY</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            placeholder="First Name*"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            placeholder="Last Name*"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email*"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="useApi">
          <input
            type="text"
            name="useApi"
            id="useApi"
            placeholder="How will you use the APIs? (optional)"
            onChange={handleInput}
          />
        </label>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
