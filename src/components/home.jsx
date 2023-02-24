import React, { useEffect, useState } from "react";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    news_1: null,
    news_2: null,
    news_3: null,
    news_4: null,
    news_5: null,
    news_6: null,
    news_7: null,
    news_8: null,
    news_9: null,
    news_10: null,
    news_11: null,
    news_12: null,
    news_13: null,
    news_14: null,
    news_15: null,
    news_16: null,
    news_17: null,
    news_18: null,
    news_19: null,
  };

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c9dccba3cd79474a8806d0d4a5289331";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ news_1: data.articles[0] });
    this.setState({ news_2: data.articles[1] });
    this.setState({ news_3: data.articles[2] });
    this.setState({ news_4: data.articles[4] });
    this.setState({ news_5: data.articles[5] });
    this.setState({ news_6: data.articles[6] });
    this.setState({ news_7: data.articles[7] });
    this.setState({ news_8: data.articles[8] });
    this.setState({ news_9: data.articles[9] });
    this.setState({ news_10: data.articles[10] });
    this.setState({ news_11: data.articles[11] });
    this.setState({ news_12: data.articles[12] });
    this.setState({ news_13: data.articles[13] });
    this.setState({ news_14: data.articles[14] });
    this.setState({ news_15: data.articles[15] });
    this.setState({ news_16: data.articles[16] });
    this.setState({ news_17: data.articles[17] });
    this.setState({ news_18: data.articles[18] });
    this.setState({ news_19: data.articles[19] });
  }
  render() {
    if (!this.state.news_1) {
      return (
        <div
          className="spinner-border position-absolute top-50 start-50 translate-middle"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    return (
      <div className="home container">
        <div className="row gx-5">
          <div className="col-sm-12 col-md-8">
            <div className="overflow-hidden">
              <img
                className="img-fluid"
                src={this.state.news_1.urlToImage}
                alt="article_1"
              />
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="fs-5 text-black-50 fw-light mt-3">
                  {this.state.news_1.source.name}
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  {this.state.news_1.author}
                </h6>
              </div>

              <h1 className="fs-1 fw-bold padding-bottom border-bottom mt-4">
                {this.state.news_1.title}
              </h1>

              <p className="fs-4 text-dark-grey mt-3 paragraph-none">
                {this.state.news_1.description}
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 section-1-2">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={this.state.news_2.urlToImage}
                    alt="arcticle-1-2"
                  />
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                      <img
                        src="./img/icons/line.png"
                        alt="line"
                        style={{ height: "2rem" }}
                      />
                      {this.state.news_2.author}
                    </h6>
                  </div>

                  <h1 className="fs-3 fw-semibold">
                    {this.state.news_2.title}
                  </h1>
                  <h6 className="fs-5 text-black-50 fw-light mt-3">
                    {this.state.news_2.source.name}
                  </h6>

                  <p className="fs-4 text-dark-grey mt-3 paragraph-none">
                    {this.state.news_2.description}
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={this.state.news_3.urlToImage}
                    alt="arcticle-1-2"
                  />
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                      <img
                        src="./img/icons/line.png"
                        alt="line"
                        style={{ height: "2rem" }}
                      />
                      {this.state.news_3.author}
                    </h6>
                  </div>

                  <h1 className="fs-3 fw-semibold">
                    {this.state.news_3.title}
                  </h1>
                  <h6 className="fs-5 text-black-50 fw-light mt-3">
                    {this.state.news_2.source.name}
                  </h6>

                  <p className="fs-4 text-dark-grey mt-3 paragraph-none">
                    {this.state.news_2.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <section className="section-2">
          <div className="section-2__title d-flex py-4">
            <h1 className="fs-1 text-center">TODAY'S TRENDING</h1>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <a data-bs-target="#homeCarousel" data-bs-slide="prev">
              <img
                className="arrow-size"
                src="./img/icons/left-arrow.png"
                alt="left-arrow"
              />
            </a>
            <a data-bs-target="#homeCarousel" data-bs-slide="next">
              <img
                className="arrow-size"
                src="./img/icons/right-arrow.png"
                alt="left-arrow"
              />
            </a>
          </div>

          <div
            id="homeCarousel"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <img
                        src={this.state.news_4.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_4.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_4.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col home-card-ipad">
                    <div className="card">
                      <img
                        src={this.state.news_5.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_5.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_5.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col home-card-desktop">
                    <div className="card">
                      <img
                        src={this.state.news_6.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_6.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_6.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <img
                        src={this.state.news_7.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_7.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_7.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col home-card-ipad">
                    <div className="card">
                      <img
                        src={this.state.news_8.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_8.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_8.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col home-card-desktop">
                    <div className="card">
                      <img
                        src={this.state.news_9.urlToImage}
                        className="card-img-top"
                        alt="img-1"
                      />
                      <div className="card-body mt-4">
                        <h5 className="card-title fs-2 fw-semibold">
                          {this.state.news_9.title}
                        </h5>
                        <p className="card-text fs-4">
                          {this.state.news_9.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-3">
          <div className="section-2__title d-flex py-4">
            <h1 className="fs-1 text-center">THE LATEST ARTICLE'S</h1>
          </div>

          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={this.state.news_10.urlToImage}
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  {this.state.news_10.source.name}
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  {this.state.news_10.author}
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">{this.state.news_10.title}</h1>

              <p className="fs-4 text-dark-grey">
                {this.state.news_10.description}
              </p>
            </div>
          </div>

          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={this.state.news_11.urlToImage}
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  {this.state.news_11.source.name}
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  {this.state.news_11.author}
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">{this.state.news_11.title}</h1>

              <p className="fs-4 text-dark-grey">
                {this.state.news_11.description}
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={this.state.news_12.urlToImage}
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  {this.state.news_12.source.name}
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  {this.state.news_12.author}
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">{this.state.news_12.title}</h1>

              <p className="fs-4 text-dark-grey">
                {this.state.news_12.description}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="section-3">
          <div className="section-2__title d-flex py-4">
            <h1 className="fs-1 text-center">THE LATEST PODCAST</h1>
          </div>

          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src="./img/home/arc-1.png"
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  Feb 11 - 5 min read
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  BY ELEN JHOSH
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">
                What Designers, Photographers, and Other Insiders Missed About
                Paris Fashion Week
              </h1>

              <p className="fs-4 text-dark-grey">
                If Paris Fashion Week in digital form has remained saturated
                with propositions and visions of the clothes we will be
                seeing-and perhaps wearing-in a few months, it's only natural to
                be feeling a certain wishfullness for the experience as it used
                to be not so long ago.
              </p>
            </div>
          </div>

          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src="./img/home/arc-1.png"
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  Feb 11 - 5 min read
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  BY ELEN JHOSH
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">
                What Designers, Photographers, and Other Insiders Missed About
                Paris Fashion Week
              </h1>

              <p className="fs-4 text-dark-grey">
                If Paris Fashion Week in digital form has remained saturated
                with propositions and visions of the clothes we will be
                seeing-and perhaps wearing-in a few months, it's only natural to
                be feeling a certain wishfullness for the experience as it used
                to be not so long ago.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center gx-5">
            <div className="col-12 col-md-4">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src="./img/home/arc-1.png"
                  alt="article_1"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fs-5 text-black-50 fw-light mt-4">
                  Feb 11 - 5 min read
                </h6>
                <h6 className="fs-6 text-secondary d-flex gap-4 align-items-center">
                  <img
                    className="img-fluid"
                    src="./img/icons/line.png"
                    alt="line"
                    style={{ height: "2rem" }}
                  />
                  BY ELEN JHOSH
                </h6>
              </div>

              <h1 className="fs-2 fw-bold mt-4">
                What Designers, Photographers, and Other Insiders Missed About
                Paris Fashion Week
              </h1>

              <p className="fs-4 text-dark-grey">
                If Paris Fashion Week in digital form has remained saturated
                with propositions and visions of the clothes we will be
                seeing-and perhaps wearing-in a few months, it's only natural to
                be feeling a certain wishfullness for the experience as it used
                to be not so long ago.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="section-4">
          <h3>More news</h3>
          <div className="home-last-section mt-5 gap-5">
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_16.title}
              </h5>
              <img
                src={this.state.news_16.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_16.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_17.title}
              </h5>
              <img
                src={this.state.news_17.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_17.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_18.title}
              </h5>
              <img
                src={this.state.news_18.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_18.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_19.title}
              </h5>
              <img
                src={this.state.news_19.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_19.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_19.title}
              </h5>
              <img
                src={this.state.news_19.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_19.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_19.title}
              </h5>
              <img
                src={this.state.news_19.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_19.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_19.title}
              </h5>
              <img
                src={this.state.news_19.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_19.description}
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-title fs-4 fw-semibold">
                {this.state.news_19.title}
              </h5>
              <img
                src={this.state.news_19.urlToImage}
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body mt-4">
                <p className="card-text fs-4">
                  {this.state.news_19.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div
            className="subscribe d-grid align-items-center justify-content-center container border-bottom overflow-hidden"
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
        </footer>
      </div>
    );
  }
}
