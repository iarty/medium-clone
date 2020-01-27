import React, { Fragment, useEffect } from "react";
import { stringify } from "query-string";
import { getPaginator, limit } from "../../utils";
import useFetch from "../../hooks/useFetch";
import FeedToggler from "../../components/FeedToggler/FeedToggler";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Feed from "../../components/Feed/Feed";
import Pagination from "../../components/Pagination/Pagination";
import PopularTag from "../../components/PopularTag/PopularTag";

const YourFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({ limit, offset });
  const apiUrl = `/articles/feed?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName="" />
            {isLoading && <Loading />}
            {error && <Error />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={match.url}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <PopularTag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFeed;
