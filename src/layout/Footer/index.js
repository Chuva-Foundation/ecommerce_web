import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./index.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Jack Ecom</span> &copy; 2022
      </p>
    </footer>
  );
}
export default Footer;
