import React, { useEffect, useState } from "react";
import homeNews from "../data";
import Footer from "./footer";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2023-02-25&to=2023-02-25&sortBy=popularity&apiKey=c9dccba3cd79474a8806d0d4a5289331"
      );
      const data = await response.json();
      setNews(data.articles);
    };
    fetchData();
  }, []);

  // Check that the news array is not empty before destructuring
  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  // console.log(news);

  return (
    <div>
      <div className="home container mt-5 pt-5">
        <div className="row gx-5 border-top pt-5">
          <div className="col-9">
            <div className="row gx-5 border-end">
              <div className="col-8">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./img/home/homeNews_1.jfif"
                    alt="article"
                  />
                </div>
              </div>
              <div className="col-4">
                <h6 className="fs-5 fw-light text-uppercase text-secondary">
                  {news[0].author}
                </h6>
                <h1 className="fs-2 fw-bold mt-3">{news[0].title}</h1>
                <p className="fs-5 fw-light mt-4">{news[0].description}</p>
                <h6 className="fs-6">{news[0].publishedAt}</h6>
              </div>

              <div
                className="row mt-5 gx-5 gy-5"
                style={{ borderTop: "1.5px  solid #666" }}
              >
                {news.slice(2, 5).map((homeNews, index) => {
                  return (
                    <div className="col-4 mt-4" key={index}>
                      <div className="card">
                        <img
                          src={homeNews.urlToImage}
                          className="card-img-top img-height-card"
                          alt="..."
                        />
                        <div className="card-body">
                          <h4 className="fs-5 text-secondary mt-3">
                            {homeNews.author}
                          </h4>
                          <h5 className="card-title mt-3 fs-3 fw-bold">
                            {homeNews.title}
                          </h5>
                          <p className="card-text fs-5 mt-3">
                            {homeNews.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="col-4 mt-4"></div>
                {news.slice(5, 7).map((homeNews, index) => {
                  return (
                    <div className="col-4 mt-4" key={index}>
                      <div className="card">
                        <img
                          src={homeNews.urlToImage}
                          className="card-img-top img-height-card"
                          alt="..."
                        />
                        <div className="card-body">
                          <h4 className="fs-5 text-secondary mt-3">
                            {homeNews.author}
                          </h4>
                          <h5 className="card-title mt-3 fs-3 fw-bold">
                            {homeNews.title}
                          </h5>
                          <p className="card-text fs-5 mt-3">
                            {homeNews.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ borderTop: "1.5px  solid #666", marginTop: "6rem" }}>
              <h2 className="fs-4 fw-bold mt-3">LATEST FROM U.S.</h2>

              <div className="row">
                {homeNews.slice(7, 17).map((homeNews) => {
                  return (
                    <div key={homeNews.id}>
                      <div
                        className="row border-bottom align-items-center"
                        style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
                      >
                        <div className="col-10 pt-5">
                          <h2 className="fs-4 fw-bold">{homeNews.title}</h2>
                          <h2 className="fs-5">{homeNews.description}</h2>
                        </div>
                        <div className="col-2">
                          <img
                            className="img-fluid"
                            src={homeNews.urlToImage}
                            alt="article"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-3">2</div>
        </div>
        {/* FOOTER */}
      </div>
      <Footer />
    </div>
  );
}
