import React from "react";

function PaginationPage({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination destination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <p  className="page-link" onClick={()=>paginate(number)}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginationPage;
