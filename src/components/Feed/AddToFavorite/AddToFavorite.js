import React from "react";
import useFetch from "../../../hooks/useFetch";

const AddToFavorite = ({ isFavorited, favoritesCount, articleSlug }) => {
  const apiUrl = `/articles/${articleSlug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);
  const favoriteCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;
  const isFavoritedWithResponse = response
    ? response.article.favorited
    : isFavorited;

  const handleLike = e => {
    e.preventDefault();
    doFetch({
      method: isFavoritedWithResponse ? "delete" : "post"
    });
  };

  const cls = [
    "btn",
    "btn-small",
    isFavoritedWithResponse ? "btn-primary" : "btn-outline-primary"
  ];

  return (
    <div>
      <button onClick={handleLike} className={cls.join(" ")}>
        <i className="ion-heart" />
        <span>&nbsp;{favoriteCountWithResponse}</span>
      </button>
    </div>
  );
};

export default AddToFavorite;
