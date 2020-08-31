import React from 'react';

const Pagination = ({ currentPage, pages, nextPage, prevPage }) => {
  return (
    <div className="pagination">
      <p>{currentPage + 1}</p>
      <p>{pages}</p>
      <button onClick={(e) => prevPage()} disabled={currentPage === 0}>
        Prev
      </button>
      <button onClick={(e) => nextPage()} disabled={currentPage === pages - 1}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
