'use strict';

const library = {
  collection: [],
  addToLibrary: (book) => {
    library.collection.push(book);
  },
  removefromLibrary: (book) => {
      let bookIndex = library.collection.indexOf(book);
      library.collection.splice(bookIndex, 1);
  },
  
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

const starterBooks = {
  "Go Tell It On The Mountain": new Book("Go Tell It On the Mountain", "James Baldwin", 256, 1953, "yes"),
  "The Guest List": new Book("The Guest List", "Lucy Foley", 319, 2020, "no"),
  "Ways of Seeing": new Book("Ways of Seeing", "John Berger", 176, 1972, "no")
}

const showBookCards = () => {library.collection.forEach(
  ({title, author, pages, "Year Published": yearPublished, "Read?": hasRead}) => addBookCard(title, author, pages, yearPublished, hasRead)
  )}

  showBookCards();

for (const bookTitle in starterBooks) {
  library.collection.push(starterBooks[bookTitle]);
}

const {title, author } = new Book("Everyone in This Room Will Someday Be Dead", "Emily R. Austin", 256, 2021, false);

function addBookCard(title, author, pages,yearPublished, hasRead) {

  let newBook = new Book(title, author, pages, yearPublished, hasRead);

  let bookCardContainer = document.createElement("div")
        bookCardContainer.className = `book-card`

  for (const prop in newBook) {

    // Abstract away background processes with variables
    let propName = prop[0].toUpperCase()+prop.slice(1) // Capitalize properties
    let propValue = newBook[prop]

    

    let temp = document.createElement("p")
        temp.innerHTML = `<strong>${propName}</strong>: ${propValue}`;
        
        bookCardContainer.appendChild(temp)
  }
  const booksDiv = document.querySelector(".books");
  booksDiv.appendChild(bookCardContainer);

}

