import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header p-0 fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-row align-items-center">
            <div className="">
              <NavLink
                to="/"
                className="nav-link"
              >
                <h1 className="App-name">WorldAtlas</h1>
              </NavLink>
            </div>
            <nav className="d-flex flex-row justify-content-end align-items-center ml-auto">
              <ul className="d-flex flex-row justify-content-end align-items-center m-0">
                <li className="navs">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="country">
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
