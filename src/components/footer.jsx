import React from "react";

export default function Footer() {
  return (
    <div>
      {/* FOOTER */}
      <footer className="mt-5">
        <div className="container">
          <div
            className="subscribe d-grid align-items-center justify-content-center  border-bottom overflow-hidden container"
            style={{ paddingBottom: "8rem" }}
          >
            <h1 className="fs-1 fw-bold text-center">SUBSCRIBE TO GET MORE</h1>
            <p className="fs-4 text-dark-grey mt-3 text-center mt-5">
              For the moment, many people are learning to balance happiness
              about their partner's vaccine eligibility with personal
              disappointment.
            </p>

            <div
              className="mt-5 d-flex gap-5"
              style={{ placeContent: "center" }}
            >
              <button type="button" className="button text-light bg-dark fs-4">
                Learn more
              </button>
              <button type="button" className="button text-light bg-dark fs-4">
                Register
              </button>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "6rem" }}>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="fs-3">CONTENT</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Podcast
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Books
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Subscription
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="fs-3">COMPANY</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Partnership
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="fs-3">SOCIAL</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Instagram
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Facebook
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Linkedin
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-4 p-0 text-muted">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className="fs-2 fw-bold">Send Me News</h5>
                <p className="fs-4 text-dark-grey">
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <div className="d-flex align-items-center position-relative w-100 mt-5">
                    <input
                      id="newsletter1"
                      type="text"
                      className="news form-control fs-4"
                      placeholder="Enter Your Email"
                    />
                    <h4
                      className="position-absolute top-50 end-0 translate-middle-y fw-semibold"
                      style={{ marginRight: "1rem" }}
                    >
                      GET INSIGHTS
                    </h4>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
            <p className="fs-5 mt-5">
              &copy; 2022 Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
