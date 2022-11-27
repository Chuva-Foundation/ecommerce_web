import styles from "./Authentication.module.css";
import login from "../../images/login.webp";
import { Link } from "react-router-dom";
import axios from "../../service/axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    email: `${email}`,
    password: `${password}`,
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/session", userData).then((response) => {
        localStorage.setItem("userToken", response.data.token);

        const storageToken = localStorage.getItem("userToken"); //Token saved in local Storage
        console.log(storageToken);
        return response.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={styles.authentication}>
      <div>
        <img src={login} alt="login" width={500} />
      </div>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <span>
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
