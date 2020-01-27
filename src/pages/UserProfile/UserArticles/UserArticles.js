import React, { useEffect } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { getPaginator, limit } from "../../../utils";
import { stringify } from "query-string";
import useFetch from "../../../hooks/useFetch";
import Feed from "../../../components/Feed/Feed";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";

const getApiUrl = ({ username, offset, isFarvorites }) => {
  const params = isFarvorites
    ? { limit, offset, favorited: username }
    : { limit, offset, author: username };

  return `articles?${stringify(params)}`;
};

const UserArticles = ({ username, location, isFavorites, url }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const apiUrl = getApiUrl({ username, offset, isFavorites });

  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch, isFavorites]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Error />}
      {!isLoading && response && (
        <>
          <Feed articles={response.articles} />
          <Pagination
            currentPage={currentPage}
            limit={limit}
            total={response.articlesCount}
            url={url}
          />
        </>
      )}
    </div>
  );
};

export default UserArticles;
