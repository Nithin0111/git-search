import React, { useContext, useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const Context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Nithin GitSearch App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {Context.user?.email ? Context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto mr" navbar>
          {Context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  Context.setUser(null);
                }}
                className="text-white"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/Signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
