  //find() or filter(); find account with the id then does that id include the inputed id
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

  //sort(a,b) to order the account by LAST name lastname is a nested object (accounts.name.last)
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => lastA.name.last > lastB.name.last ? 1 : -1
  );
}

  //forEach(), it is incredibly nested right now; borrowed is how many times a book has been checked out(we don't care about whether it has been returned or not)
  //It returns a number that represents the number of times the account's ID appears in any book's `borrows` array.
  function getTotalNumberOfBorrows(account, books) {
    let number = 0;
    books.forEach((book) => {
      book.borrows.forEach((accounts) => {
          if (accounts.id === account.id) {
            number++;
          }
        });      
    });
    return number;
  }

  //we need to find out if it is borrowed and whether returned is false
  //return book array
function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter((book)=> {
    let borrow = book.borrows[0];
    return !borrow.returned && borrow.id === account.id
  }).map((book)=>{
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}

//helper function
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
