import { Link } from "react-router";
import "./Footer.css";
function Footer() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </>
  );
}
export default Footer;
