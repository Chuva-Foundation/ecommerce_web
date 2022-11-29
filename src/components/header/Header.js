//import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import styles from "./Header.module.css";

const logo = (
  <div>
    <Link to="/" className={styles.logo}>
      <h2>
        Jack <span className={styles.ecom}>Ecom</span>
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      cart
      <FaShoppingCart size={20} />
      <p className={styles["cart-orders"]}>0</p>
    </Link>
  </span>
);

function Header() {
  //Side bar menu
  //const [showMenu, setShowMenu] = useState(false);

  //const toggleMenu = () => setShowMenu(!showMenu);
  //const hideMenu = () => setShowMenu(false);

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav>
          <div></div>
          <ul className={styles.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link to="/contact">About Us</Link>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My orders</Link>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenu size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;
