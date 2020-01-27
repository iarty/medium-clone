import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import useFetch from "../../hooks/useFetch";

const PopularTag = () => {
  const [{ response, isLoading, error }, doFetch] = useFetch("/tags");
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        {response.tags.map(tag => (
          <Link to={`/tags/${tag}`} className="tag-default tag-pill" key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
