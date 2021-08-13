function findAuthorById(authors, id) {
    return authors.find((author) => author.id ===id);
  }
  
  function findBookById(books, id) {
    return books.find((book) => book.id === id);
  }
  
  function partitionBooksByBorrowedStatus(books) {
    const returned = books.filter((book) => !book.borrows.some((borrow)=> borrow.returned === false ));
    const notReturned = books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false ));
    return [notReturned, returned];
  }
  function getAccount (id,accounts)
  {
    return accounts.find((account)=> account.id === id);
  }
  function getBorrowersForBook(book, accounts) 
  {
    const result = [];
  
    for(let account of book.borrows)
    {
      if(result.length <10)
      {
        const theBorrower = getAccount(account.id,accounts);
        theBorrower[`returned`] = account.returned;
        result.push(theBorrower);
      }
  
    }
    return result;
  }
  function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  
    const borrowers = borrows.map(({ id, returned })=> {
      // find account that matches the borrower's ID
      const account = accounts.find(account => account.id === id);
  
      // return the matching account, along with the `returned` info
      return {
        ...account,
        returned,
      };
    });
  
    return borrowers
      .sort((borrowerA, borrowerB) => {
        const companyA = borrowerA.company;
        const companyB = borrowerB.company;
        return companyA.localeCompare(companyB);
      })
      .slice(0, 10);
  }  
  
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };
  