import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavBarItemMobile } from '../navbar-Item-Mobile';
import styleMobile from './styleNavBarMobile.module.scss'

export const NavBarMobile = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>

      <div className={styleMobile.navbar}>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><h3>Junno</h3></NavbarBrand>
          {/* ---------------------------------------- barnd name */}
          <div className={styleMobile.cartLogo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
          </div>
          {/* ------------------------------------------- cart logo */}
          <div className={styleMobile.loginLogo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
              <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
          </div>
          {/* ------------------------------------------------ login logo */}

          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <div className={styleMobile.navItem}>
              <NavItem>
                <NavBarItemMobile>Home</NavBarItemMobile>
              </NavItem>
              <hr/>
              <NavItem>
                <NavBarItemMobile>All Categories</NavBarItemMobile>
              </NavItem>
              <hr/>
              <NavItem>
                <NavBarItemMobile>Men Clothing</NavBarItemMobile>
              </NavItem>
              <hr/>
              <NavItem>
                <NavBarItemMobile>Women Clothing</NavBarItemMobile>
              </NavItem>
              <hr/>
              <NavItem>
                <NavBarItemMobile>Jewelery</NavBarItemMobile>
              </NavItem>
              <hr/>
              <NavItem>
                <NavBarItemMobile>Electronic</NavBarItemMobile>
              </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

