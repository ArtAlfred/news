import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="bg-dark text-light px-4 py-2 fs-5 text-start">
        ADVERTISE WITH US
      </div>
      <div className="nav--mobile align-items-center">
        <div className="d-flex justify-content-center">
          <a href="#" className="">
            <img className="nav--logo" src="./img/icons/ASKENT.png" />
          </a>
        </div>

        <nav
          className="w-100 navbar navbar-expand-md navbar-dark"
          aria-label="Offcanvas navbar large"
        >
          <div className="container-fluid d-flex justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sideBar"
              aria-controls="sideBar"
            >
              <span>
                <img
                  src="./img/icons/menu.png"
                  alt="menu"
                  style={{ height: "3rem" }}
                />
              </span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-light"
              tabIndex="-1"
              id="sideBar"
              aria-labelledby="sideBarLabel"
            >
              <div className="offcanvas-header justify-content-end">
                <button
                  type="button"
                  className="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center align-items-center gap-5 flex-grow-1 pe-3 position-relative">
                  <div className="d-flex gap-5">
                    <li className="nav-item">
                      <a
                        className="nav-link fs-4 fw-semibold active text-dark"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 fw-normal text-dark" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 fw-normal text-dark" href="#">
                        Podcast
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 fw-normal text-dark" href="#">
                        Books
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 fw-normal text-dark" href="#">
                        About
                      </a>
                    </li>
                  </div>

                  <div className="d-flex align-items-center gap-4 overflow-hidden position-absolute top-50 end-0 translate-middle-y">
                    <a>
                      <img
                        src="./img/icons/shopping-bag.png"
                        style={{ height: "3rem" }}
                      />
                    </a>
                    <a>
                      <img
                        src="./img/icons/user.png"
                        style={{ height: "2rem" }}
                      />
                    </a>
                  </div>
                </ul>

                {/* MOBILE NAVBAR */}

                <ul className="navbar-mobile mt-5">
                  <li className="fs-1 py-3 px-5 border-bottom">
                    <a href="#" className="text-dark">
                      HOME
                    </a>
                  </li>
                  <li className="fs-1 py-3 px-5 border-bottom">
                    <a href="#" className="text-dark">
                      BLOG
                    </a>
                  </li>
                  <li className="fs-1 py-3 px-5 border-bottom">
                    <a href="#" className="text-dark">
                      PODCAST
                    </a>
                  </li>
                  <li className="fs-1 py-3 px-5 border-bottom">
                    <a href="#" className="text-dark">
                      BOOKS
                    </a>
                  </li>
                  <li className="fs-1 py-3 px-5 border-bottom">
                    <a href="#" className="text-dark">
                      ABOUT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
