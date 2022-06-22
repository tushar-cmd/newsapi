  import React, { createContext, useEffect, useState } from "react";
  import axios from "axios";

  export const NewsContext = createContext();

  export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "1c31e0e165df4c1fa4137f14a41db9ca";

    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);

    return (
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    );
  };
