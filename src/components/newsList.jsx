import React, { useState, useEffect } from "react";

function NewsList() {
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

  // Destructure the news array into two separate arrays
  const [firstArticle, secondArticle, ...remainingArticles] = news;

  return (
    <div>
      <h1>Today's Apple News</h1>
      <img src={firstArticle.urlToImage} />
      <h2>{firstArticle.title}</h2>
      <h2>{firstArticle.description}</h2>
      <hr />
      <img src={secondArticle.urlToImage} />
      <h2>{secondArticle.title}</h2>
      <h2>{secondArticle.description}</h2>
    </div>
  );
}

export default NewsList;
