import React from 'react';

const Pagination = ({ currentPage, pages, nextPage, prevPage }) => {
  const getPages = () => {
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }

    return pagesArr.map((page) => (
      <div
        className={page === currentPage + 1 ? 'page active' : 'page'}
        key={page}
      >
        {page}
      </div>
    ));
  };

  return (
    <div className="pagination">
      <div className="page-numbers">{getPages()}</div>
      <div className="btn-container">
        <button
          className={currentPage === 0 ? 'disabled' : null}
          onClick={(e) => prevPage()}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button
          className={currentPage === pages - 1 ? 'disabled' : null}
          onClick={(e) => nextPage()}
          disabled={currentPage === pages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
