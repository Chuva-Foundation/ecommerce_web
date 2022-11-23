import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import styles from "./Header.module.css";

const logo = (
  <div>
    <Link to="/" className={styles.link}>
      <h2>
        Jack <span className={styles.span}>Ecom</span>
      </h2>
    </Link>
  </div>
);

const cart = (
  <span>
    <Link to="/cart">
      cart
      <FaShoppingCart size={20} />
      <p>3</p>
    </Link>
  </span>
);

function Header() {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link to="/contact">Contact Us</Link>
          </ul>
          <div className={styles.headerright}>
            <span>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My orders</Link>
            </span>
            {cart}
          </div>
        </nav>

        <div>
          {cart}
          <HiOutlineMenu size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;
