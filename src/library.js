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
  showForm(){

    let form = book_form_container;

    if (form.classList.value === "formVisible") {

      form.classList.remove("formVisible");
      form.classList.add("formInvisible");
      return;
    }

    form.classList.remove("formInvisible");
    form.classList.add("formVisible");
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

const starterBooks = {
  "Go Tell It On The Mountain": new Book("Go Tell It On the Mountain", "James Baldwin", 256, 1953, "yes"),
  "The Guest List": new Book("The Guest List", "Lucy Foley", 319, 2020, "no"),
  "Ways of Seeing": new Book("Ways of Seeing", "John Berger", 176, 1972, "no")
}

for (const bookTitle in starterBooks) {
  library.collection.push(starterBooks[bookTitle]);
}

const showBookCards = () => {library.collection.forEach(
  ({title, author, pages, "Year Published": yearPublished, "Read?": hasRead}) => addBookCard(title, author, pages, yearPublished, hasRead)
  )}

  showBookCards();

function addBookCard(title, author, pages,yearPublished, hasRead) {

  let newBook = new Book(title, author, pages, yearPublished, hasRead);
  library.collection.push(newBook);

  let bookCardContainer = document.createElement("div");
      bookCardContainer.className = `book-card`;

  for (const prop in newBook) {

    // Abstract away background processes with variables
    let propName = prop[0].toUpperCase()+prop.slice(1);// Capitalize properties
    let propValue = newBook[prop];

    

    let temp = document.createElement("p");
        temp.innerHTML = `<strong>${propName}</strong>: ${propValue}`;
        
        bookCardContainer.appendChild(temp);
  }
  const booksDiv = document.querySelector(".books");
  booksDiv.appendChild(bookCardContainer);

}

// Event Listeners

addBookBtn.addEventListener("click", library.showForm)
// Use the submit event listener to check for form submission
let bookForm = document.getElementById("book_form_container");
    bookForm.addEventListener("submit", () => {
      event.preventDefault(); // prevents page resetting due to submit

      // Use elements to access the inputs from bookForm
      const title = bookForm.elements.bookTitle.value;
      const author = bookForm.elements.bookAuthor.value;
      const pages = bookForm.elements.bookPages.value;
      const year = bookForm.elements.bookYear.value;
      const read = bookForm.elements.bookRead.value;

      let newBook = new Book(title, author, pages, year, read);
      library.collection.push(newBook);
// Need to tweak so previous cards are cleared before new cards added from library collection.
      showBookCards();
    })