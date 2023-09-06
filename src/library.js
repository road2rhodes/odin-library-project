'use strict';

const library = {
  collection: [],
  addToLibrary: (book) => {
    library.collection.push(book);
  },
  removefromLibrary: (index) => {
      library.collection.splice(index, 1);
      showBookCards();
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
  },
  booksDiv: document.querySelector(".books"),
  clearBookDiv(){
    booksDiv.innerHTML = "";
  }
  
}

const { addToLibrary, removefromLibrary, booksDiv, showForm, clearBookDiv } = library

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

const showBookCards = () => {
  clearBookDiv();
  library.collection.forEach(
  book => addBookCard(book)
  )}

  showBookCards();

const changeBookAddText = function(){

  const btnTxtOpen = "NEW BOOK";
  const btnTxtClose = "CLOSE FORM";

  addBookBtn.innerHTML === btnTxtOpen
  ? addBookBtn.innerHTML = btnTxtClose
  : addBookBtn.innerHTML = btnTxtOpen
}

function addBookCard(bookObject) {

//  const {title, author, pages, "Year Published": yearPublished, "Read?": hasRead} = object;
  let bookIndex = library.collection.indexOf(bookObject)
  let bookCard = document.createElement("div");
      bookCard.className = `book-card`;
      bookCard.setAttribute("data-bookNumber", `${bookIndex}`)

  for (const prop in bookObject) {

    // Abstract away background processes with variables
    let propName = prop[0].toUpperCase()+prop.slice(1);// Capitalize properties
    let propValue = bookObject[prop];

    

    let temp = document.createElement("p");
        temp.innerHTML = `<strong>${propName}</strong>: ${propValue}`;
    
        
        bookCard.appendChild(temp)
                
  }

  let removeLink = document.createElement("a");
        removeLink.href = "#";
        removeLink.textContent = "Remove";
        removeLink.addEventListener("click",() =>
        removefromLibrary(bookIndex));
        removeLink.addEventListener("click", showBookCards)
        bookCard.appendChild(removeLink);

  booksDiv.appendChild(bookCard);

}

// Event Listeners
addBookBtn.addEventListener("click", changeBookAddText)
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
      addToLibrary(newBook);
// Need to tweak so previous cards are cleared before new cards added from library collection.
      clearBookDiv();
      showBookCards();
    })