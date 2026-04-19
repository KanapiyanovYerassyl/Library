const dialog = document.getElementById("add-book-dialog");
const addBookButton = document.getElementById("add-book-button");
const cancelDialog = document.getElementById("cancel");
const form = document.getElementById("dialog-form");
const booksView = document.querySelector(".books");
const submitButton = document.getElementById("submit");






addBookButton.addEventListener("click", function (){
    dialog.showModal();
    
})

cancelDialog.addEventListener("click", function (){
    dialog.close();
})


const myLibrary = [];
const created = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
    updateBooks();
};




function updateBooks(){
    myLibrary.forEach(function(element){
        if (created.includes(element.id)){
            //skip
        }else{
            createBookCard(element);
            created.push(element.id);
        }
    })
}

function createBookCard(book) {
    const div = document.createElement("div");
    const pTitle = document.createElement("p");
    pTitle.textContent = '"' + book.title + '"';
    
    const pAuthor = document.createElement("p");
    pAuthor.textContent = book.author;

    const pPages = document.createElement("p");
    pPages.textContent = book.pages;

    const buttonRead = document.createElement("button");
    // if read then read if not ,not read
    if(book.read === "on"){
        buttonRead.textContent = "Read";
    }else {
        buttonRead.textContent = "Not Read";
    }

    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove";


    div.classList.add("book")
    buttonRead.classList.add("read-book");
    buttonRemove.id = "remove-book";

    div.appendChild(pTitle);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(buttonRead);
    div.appendChild(buttonRemove);
    booksView.appendChild(div);
}


form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const read = formData.get("read");

    const book = new Book(title, author, pages, read);
    book.addBookToLibrary();
    form.reset();
    dialog.close();
})