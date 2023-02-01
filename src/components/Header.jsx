import React from "react";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
      <h1>Rahul Yadav</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <HashLink to={"/#testinomials"}>Testinomials</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#skill"}>Skills</HashLink>
        <HashLink to={"/#service"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;
