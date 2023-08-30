'use strict';

class Book {
  constructor(title, author, pages, yearPublished, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yearPublished = yearPublished;
    this.hasRead = hasRead;
  }

  getReadStatus(){
    return this.hasRead;
  };
  setReadStatus(binaryNum){
    binaryNum === 1 ? this.hasRead = true : this.hasRead = false
  }

}

// Books

const everyoneInThisRoom = new Book("Everyone in This Room Will Someday Be Dead", "Emily R. Austin", 256, 2021, false)

console.log(everyoneInThisRoom);

everyoneInThisRoom.setReadStatus(1)

console.log(everyoneInThisRoom);
