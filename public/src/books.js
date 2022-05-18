//It returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//It returns the book object that has the matching ID.
function findBookById(books, id) {
  return books.find((book) => book.id.includes(id));
}

/*It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.
*/
function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter ((book) => book.borrows[0].returned === false);
  const returnedBook = books.filter ((book) => book.borrows[0].returned === true);
  let separate = [checkedOut, returnedBook];
  return separate;
}

/*It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
 */
function getBorrowersForBook(book, accounts) {
    // `borrows` is a list of transactions, each of type { id: string, returned: true }
    const { borrows } = book;
  
    const borrowers = borrows.map(({ id, returned })=> {
      // find account that matches the borrower's ID
      const accountMatch = accounts.find(account => account.id === id);
  
      // return the matching account, along with the `returned` info
      return {
        ...accountMatch,
        returned
      };
    });
  
    return borrowers.sort((aBorrower, bBorrower) => bBorrower - aBorrower).slice(0, 10);
  }


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
