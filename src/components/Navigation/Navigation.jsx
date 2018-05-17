import React from "react";
import logoSVG from "../../assets/images/logo.svg";
import "../../assets/stylesheets/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="logo" src={logoSVG} alt="logo" />
      <input
        type="submit"
        className="input-submit"
        value="SIGN UP"
        onClick={this.handleSubmit}
      />
    </nav>
  );
};

export default Navigation;
