import styles from "./Authentication.module.css";
import forgot from "../../images/forgot.webp";
import { Link } from "react-router-dom";

function Reset() {
  return (
    <section className={styles.authentication}>
      <div>
        <img src={forgot} alt="forgot" width={500} />
      </div>
      <div>
        <h2>Reset Password</h2>
        <form className={styles.box}>
          <input type="email" placeholder="Email" required />
          <p>
            <button type="submit">Reset</button>
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

export default Reset;
