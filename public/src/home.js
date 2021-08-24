function getTotalBooksCount(books) {
    return books.length;
  }
  
  function getTotalAccountsCount(accounts) {
    return accounts.length;
  }
  
  function getBooksBorrowedCount(books) {
     const notReturned = books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false ));
    return notReturned.length;
  }
  
  function getMostCommonGenres(books) {
     let result = [];
    const genres = books.map((book)=> book.genre);
    result = genres.reduce((acc,theGenre)=>{ acc.some((resultGenere) => resultGenere.name === theGenre)? acc.find((resultGenre) => resultGenre.name === theGenre).count+=1 : acc.push({"name": theGenre, count:1 });
      return acc;
    },[]);  
    result.sort((item , item2) => item2.count - item.count )
    console.log(result);
    result.length = 5;
    return result;
  }
  
  function getMostPopularBooks(books) {
    const result = [];
    for(let book of books)
    {
      result.push({"name": book.title , "count": book.borrows.length});
    }
    result.sort((item , item2) => item2.count - item.count );
    result.length = 5;
    console.log(result);
    return result;
  }
  function getMostPopularAuthors(books, authors) {
    // console.log(getMostPopularAuthors(books, authors))
    let popularAuthors = books.map(book => {
      const { name: {first, last}} = authors.find(author => author.id === book.authorId)
      return {
        name: `${first} ${last}`,
        count: book.borrows.length
      }
    });
    popularAuthors.sort((a, b) => b.count - a.count);
    deleteExtraObjects(popularAuthors,5);
    return popularAuthors;
  }
  
  function deleteExtraObjects(arr, num) {
    while(arr.length > num) {
      arr.pop();
    }
  }
  // function getMostPopularAuthors(books, authors) 
  // {   
  //  const result = [];
  //   for(let book of books)
  //   {
  //     result.push({"name": book.title , "count": book.borrows.length});
  //   }
  //   result.sort((item , item2) => item2.count - item.count );
  //   result.length = 5;
  //   console.log(result);
  //   return result;
  
  
  // }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
   deleteExtraObjects
  };
  