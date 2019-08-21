import React from "react";
import "./custon-buttom-styles.scss";
const Button = ({ children, isGoogleSign, ...otherButtonProps }) => (
  <button
    className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default Button;
