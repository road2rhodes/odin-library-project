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
        this.title = title;
        this.author = author;
        this.pages = pages;
        this["Year Published"] = yearPublished;
        this["Read?"] = hasRead;
    }
    getReadStatus() {
        return this.hasRead;
    }
    ;
    setReadStatus(binaryNum) {
        binaryNum === 1 ? this.hasRead = "yes" : this.hasRead = "no";
    }
}
const {title, author } = new Book("Everyone in This Room Will Someday Be Dead", "Emily R. Austin", 256, 2021, false);

function addBookCard(title, author, pages,yearPublished, hasRead) {

  let newBook = new Book(title, author, pages, yearPublished, hasRead);

  for (const prop in newBook) {

    // Abstract away background processes with variables
    let propName = prop[0].toUpperCase()+prop.slice(1) // Capitalize properties
    let propValue = newBook[prop]

    let temp = document.createElement("p")
        temp.textContent = `${propName}: ${propValue}`;
        document.body.appendChild(temp)
  }
}

const addBooksDiv = document.querySelector(".add_books");