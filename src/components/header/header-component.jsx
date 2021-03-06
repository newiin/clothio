import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
import "./header-styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo" to="/">
      <Logo className=" logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/auth">
          Sign In
        </Link>
      )}
    </div>
  </div>
);
export default Header;
