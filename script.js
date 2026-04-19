const dialog = document.getElementById("add-book-dialog");
const addBookButton = document.getElementById("add-book-button");
const cancelDialog = document.getElementById("cancel");
const form = document.getElementById("dialog-form");
const booksView = document.querySelector(".books");
const sumbitButton = document.getElementById("#submit");





addBookButton.addEventListener("click", function (){
    dialog.showModal();
})

cancelDialog.addEventListener("click", function (){
    dialog.close();
})


const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
};

// submitButton.addEventListener("click", function (){
//     sampleCards.forEach((result) => {

//     const card = document.createElement("div");
//     card.classList = "card-body";

    
//     const content = `
//         <div class="card">
//         <div class="card-header" id="coolCards">
//         <img src="${result.image}" class="cardImage">
        
//         </div>
    
//             <div class="card-body">
    
//             <h5>${result.title}</h5>
//             <p>${result.description}</p>
        
            
            
//             </div>
    
//         </div>
//         `;

//     container.innerHTML += content;
//     });
// })



