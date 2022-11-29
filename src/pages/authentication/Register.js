import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../service/axios";
import styles from "./Authentication.module.css";
import register from "../../images/register.webp";
import Loader from "../../components/loader/Loader";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Confirmation of password does not go to backend
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userData = {
    first_name: `${firstName}`,
    last_name: `${lastName}`,
    email: `${email}`,
    password: `${password}`,
    birth: `${date}`,
    phone: `${phone}`,
    adress: `${address}`,
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmationPassword) {
      toast.error("Passwords don't match!");
    }
    try {
      const resp = await axios.post("/users", userData).then((response) => {
        console.log(response.data);
        setLoading(false);
        navigate("/login");

        return response.data;
      });
      //Clear inputbox if register was successfully
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmationPassword("");
      setDate("");
      setPhone("");
      setAddress("");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <section className={styles.authentication}>
        <div>
          <img src={register} alt="register" width={500} />
        </div>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
            <input
              type="date"
              placeholder="Birth Date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <p>
              <button type="submit">Register</button>
            </p>
          </form>
          <span>
            <p>
              Have an account already?<Link to="/login"> Login</Link>
            </p>
          </span>
        </div>
      </section>
    </>
  );
}

export default Register;
