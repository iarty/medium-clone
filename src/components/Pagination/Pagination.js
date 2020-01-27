import React from "react";
import { Link } from "react-router-dom";
import { range } from "../../utils";

const PaginationItem = ({ page, currentPage, url }) => {
  const cls = ["page-item", currentPage === page && "active"];
  return (
    <li className={cls.join(" ")}>
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;
