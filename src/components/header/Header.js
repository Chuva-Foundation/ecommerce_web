import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div>
          <Link to="/" className={styles.link}>
            <h2>
              Jack <span className={styles.span}>Ecom</span>
            </h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link to="/contact">Contact Us</Link>
          </ul>
          <div className={styles.header_right}>
            <span>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My orders</Link>
            </span>
            <span>
              <Link to="/cart">
                cart
                <FaShoppingCart size={20} />
                <p>3</p>
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;