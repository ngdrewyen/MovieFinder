import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const APP_KEY = "381f60bf9138bcdd86c6dbed4bc611e3";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(".");
  // const [page, pageNumber] = useState(1);

  useEffect(() => {
    fetchItems();
  }, [query]);

  const fetchItems = async () => {
    setIsLoading(true);
    const result = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}&language=en-US`
    );
    setItems(result.data.results);
    setIsLoading(false);
    console.log(result.data.results);
  };

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
