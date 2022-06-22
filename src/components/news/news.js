import React, { useContext } from "react";
import { NewsContext } from "/home/maxx/Downloads/news/src/components/news/NewsContext.js";
import NewsArticle from "/home/maxx/Downloads/news/src/components/news/NewsArticle.js";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
