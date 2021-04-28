import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <div className='container-fluid'>
                <NavLink to='/' className='navbar-brand'>
                  STUDIO 007
                </NavLink>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'>
                  <ul className='navbar-nav d-flex justify-content-end w-100 mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        aria-current='page'
                        activeClassName='navbar_menu'
                        to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        activeClassName='navbar_menu'
                        to='/service'>
                        Services
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        activeClassName='navbar_menu'
                        to='/about'>
                        About
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        activeClassName='navbar_menu'
                        to='/contact'>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
