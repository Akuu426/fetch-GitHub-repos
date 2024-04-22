import React from "react";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

// import React, { useState } from "react";

// const Pagination = () => {
//   const [repos] = useState([]);
//   const [reposPerPage] = useState(4);
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(repos.length / reposPerPage);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePreviousPage} disabled={currentPage <= 1}>
//         Previous
//       </button>
//       <span>
//         {" "}
//         Page {currentPage} of {totalPages}{" "}
//       </span>
//       <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
