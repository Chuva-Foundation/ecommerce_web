import styles from "./authentication.module.css";
import login from "../../images/login.webp";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className={styles.authentication}>
      <div>
        <img src={login} alt="login" width={500} />
      </div>
      <div>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
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
