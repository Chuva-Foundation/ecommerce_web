import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      /<Link to="/">HOME WHEN IMAGE CLICKED</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/account">My Account</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
