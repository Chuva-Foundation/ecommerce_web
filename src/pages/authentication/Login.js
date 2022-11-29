import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../service/axios";
import Loader from "../../components/loader/Loader";
import styles from "./Authentication.module.css";
import login from "../../images/login.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userData = {
    email: `${email}`,
    password: `${password}`,
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post("/session", userData).then((response) => {
        localStorage.setItem("userToken", response.data.token);

        const storageToken = localStorage.getItem("userToken"); //Token saved in local Storage
        setLoading(false);
        toast.success("Welcome Back!");
        navigate("/");

        return response.data;
      });
      //Clear inputbox if register was successfully
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoading(false);
      toast.error("Wrong Password!");
      console.log(error);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <ToastContainer autoClose={3000} />
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
            <p>
              Don't have an account?<Link to="/register"> Register</Link>
            </p>
          </span>
        </div>
      </section>
    </>
  );
}

export default Login;
