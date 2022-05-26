import { useState, useEffect, createContext } from "react";
import React from "react";

export const localContext = createContext();

function ContextLocalStorage(props) {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourite")) ?? []
  );

  //add movie to local Storage and Filter
  const addFavouriteMovie = (movie) => {
    let newFavouriteList = [];
    newFavouriteList.push(...favourites, { id: movie.id, name: movie.title });
    setFavourites(newFavouriteList);
    favourites &&
      favourites.map((el) => {
        if (el.id === movie.id) {
          setFavourites(favourites.filter((item) => item.id !== movie.id));
          localStorage.setItem("favourite", JSON.stringify(favourites));
        }
      });
  };
  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <localContext.Provider value={{ addFavouriteMovie, favourites }}>
      {props.children}
    </localContext.Provider>
  );
}

export default ContextLocalStorage;
