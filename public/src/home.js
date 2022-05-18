//It returns a number that represents the number of book objects inside of the array
function getTotalBooksCount(books) {
  return books.length;
}

//It returns a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//It returns a number that represents the number of books that are currently checked out of the library. This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned !== true) count++
  }
  return count;
}

/*It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

Even if there is a tie, the array should only contain no more than five objects.
*/
function getMostCommonGenres(books) {
  let commonGenres = {};
  books.forEach((book) => {
    if (commonGenres[book.genre] == null) {
      commonGenres[book.genre] = 1;
    } else {
      commonGenres[book.genre] += 1;
    }
  })
  let topGenres = [];
  for (const [key, value] of Object.entries(commonGenres)) {
    console.log(Object.entries(commonGenres))
    topGenres.push({
      "name" : key,
      "count" : value
    });
  }
  topGenres.sort((aGenre, bGenre) => bGenre.count - aGenre.count);
  return topGenres.slice(0, 5);
}

/*It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

Even if there is a tie, the array should only contain no more than five objects.*/
function getMostPopularBooks(books) {
  const topBooks =[];
  const borrows = books.reduce((acc, book) => {
    topBooks.push({ name: book.title, count: book.borrows.length 
  })}
  , []);
  return topBooks.sort((aBook, bBook) => bBook.count - aBook.count).slice(0, 5);
}

/*It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

Even if there is a tie, the array should contain no more than five objects.
 */
function getMostPopularAuthors(books, authors) {
  const authorArray = books.reduce((acc, book) => {
    const { authorId, borrows } = book;
    const authorObj = authors.find(author => author.id === authorId);
    const name = `${authorObj.name.first} ${authorObj.name.last}`;
    const count = borrows.length;
    const authorIsThere = acc.find(auth => auth.name === name) 
    if (authorIsThere) {
      authorIsThere.count += count;
    } else {
      const newAuthor = {
        name,
        count
      };
      acc.push(newAuthor);
    }
    return acc;
  }, []);
  const topAuthors = authorArray.sort((aAuthor, bAuthor) => bAuthor.count - aAuthor.count).slice(0, 5);
  return topAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
