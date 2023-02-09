import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({handlePageClick}) => {
  return (
    <ReactPaginate
      previousLabel={"Back"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={20}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
