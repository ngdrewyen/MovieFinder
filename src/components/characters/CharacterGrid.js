import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items
        .filter((item) => item.poster_path)
        .map((item) => (
          <CharacterItem item={item} key={item.id}></CharacterItem>
        ))}
    </section>
  );
};
export default CharacterGrid;
