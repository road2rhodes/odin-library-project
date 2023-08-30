'use strict';

class Book {
  
  title: string;
  author: string;
  pages: number;
  yearPublished: number;
  hasRead: boolean;
  
  constructor(title: string, author: string, pages: number, yearPublished: number, hasRead: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yearPublished = yearPublished;
    this.hasRead = hasRead;
  }

  getReadStatus(): boolean{
    return this.hasRead;
  };
  setReadStatus(binaryNum: 1 | 0): void{
    binaryNum === 1 ? this.hasRead = true : this.hasRead = false
  }
  bookInfo = ():string => {
    const {title, author, pages, yearPublished, hasRead} = this;

    return `Title: ${title},\nAuthor: ${author}\nPages: ${pages}\nYear published: ${yearPublished}\nRead yet? ${hasRead}`

  }

}

// Books

const everyoneInThisRoom = new Book("Everyone in This Room Will Someday Be Dead", "Emily R. Austin", 256, 2021, false)


const addBooksDiv = document.querySelector(".add_books");
      addBooksDiv ? addBooksDiv.innerHTML = everyoneInThisRoom.bookInfo()
                  : console.log("No 'add_book's div found");