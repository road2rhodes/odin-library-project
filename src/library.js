'use strict';

const library = {
  collection: [],
  addToLibrary: (book) => {
    library.collection.push(book);
  },
  removefromLibrary: (book) => {
      let bookIndex = library.collection.indexOf(book);
      library.collection.splice(bookIndex, 1);
  }
}

class Book {
    constructor(title, author, pages, yearPublished, hasRead) {
        this.bookInfo = () => {
            const { title, author, pages, yearPublished, hasRead } = this;
            return `Title: ${title},\nAuthor: ${author}\nPages: ${pages}\nYear published: ${yearPublished}\nRead yet? ${hasRead}`;
        };
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.yearPublished = yearPublished;
        this.hasRead = hasRead;
    }
    getReadStatus() {
        return this.hasRead;
    }
    ;
    setReadStatus(binaryNum) {
        binaryNum === 1 ? this.hasRead = true : this.hasRead = false;
    }
}
const everyoneInThisRoom = new Book("Everyone in This Room Will Someday Be Dead", "Emily R. Austin", 256, 2021, false);
const addBooksDiv = document.querySelector(".add_books");
addBooksDiv ? addBooksDiv.textContent = everyoneInThisRoom.bookInfo()
    : console.log("No 'add_book's div found");
//# sourceMappingURL=library.js.map