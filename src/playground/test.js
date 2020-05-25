
function pagination(totalPages, pageRange, currentPage) {
    const pageNumbers = [], offset = 2
    let lowerBound, upperBound

    if(totalPages <= pageRange) {
        lowerBound = 1
        upperBound = totalPages
    } else {
        if(currentPage <= (totalPages - offset)){
            lowerBound = currentPage <= Math.ceil(pageRange/2) ? 1 : currentPage - offset
            upperBound = currentPage <= Math.ceil(pageRange/2) ? pageRange : currentPage + offset
            console.log('first loop')
        } else {
            lowerBound = totalPages - pageRange + 1
            upperBound = totalPages
            console.log('second loop')
        }
    }
    
    for(let i = lowerBound; i <= upperBound; i++){
        pageNumbers.push(i)
    }
    return pageNumbers
}

console.log(pagination(20, 5, 19))


