import React from 'react'

function Pagination(props) {
    const offset = 2, pageRange = 5
    const pageNumbers = []
    const { totalPages, currentPage, handlePageChange, handlePrevPageChange, handleNextPageChange } = props
    let lowerBound, upperBound

    if(totalPages <= pageRange) {
        lowerBound = 1
        upperBound = totalPages
    } else {
        if(currentPage <= (totalPages - offset)){
            lowerBound = currentPage <= Math.ceil(pageRange/2) ? 1 : currentPage - offset
            upperBound = currentPage <= Math.ceil(pageRange/2) ? pageRange : currentPage + offset
        } else {
            lowerBound = totalPages - pageRange + 1
            upperBound = totalPages
        }
    }

    for(let i = lowerBound; i <= upperBound; i++) {
        pageNumbers.push(i)
    }

    return (
        <small>Page {currentPage} of {totalPages}
        <ul className="pagination pagination-sm justify-content-end">
            <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                <a className="page-link" href="#" onClick={handlePrevPageChange}>Prev</a>
            </li>
            {
               pageNumbers.map(num => {
                   return <li key={num} className={currentPage === num ? 'page-item active' : 'page-item' }><a className="page-link" href="#" onClick={() => handlePageChange(num)}>{num}</a></li>
               }) 
            }
            <li className={currentPage === totalPages ? 'page-item disabled' : 'page-item'}>
                <a className="page-link" href="#" onClick={handleNextPageChange}>Next</a>
            </li>
        </ul></small>
    )
}

export default Pagination