// * TODO: CHECK FREECODECAMP AS AN ALTERNATE FOR PRACTICE
// TODO: New book button that brings up the form from each display

// Grabbed my button to add new book and the div containing the form
const popUp = document.querySelector("#popUp")
// const popUpbtn = document.querySelector("#new_book_button") 
const saveBtn = document.querySelector("#saveButton")
// popUp.addEventListener("click", (e) => {
//     e.style.display = "block"
// })

// Assigning each textbox content to a variable
let bookTitle = document.querySelector("#book_title")
let bookAuthor = document.querySelector("#book_author")
let bookPages = document.querySelector("#book_pages")
let bookFinish = document.querySelector("#book_finished")

// E.Listener which creates and adds book to library
saveBtn.addEventListener("click", () => {
     
    let newBook = bookTitle.value
    newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookFinish.value)
    addToLibrary(newBook);
    clearForm();

    displayLibrary();
})

// My library array
let myLibrary = [];

// Creating an object with a function in it to display info
function Book(title, author, pages, complete) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.complete = complete
    this.info = function() {
        let retInfo = this.title + ", " + this.author + ", " + this.pages + ", " + this.complete
        return retInfo; 
    }

}

// Push the args into the library array
function addToLibrary(obj) {
    myLibrary.push(obj);
}

// Function to loop through array and display each book 
function displayLibrary(){
    myLibrary.forEach(i => {
        console.table(i);
    });
}

clearForm = () => {

    bookTitle.value = null 
    bookAuthor.value = null 
    bookPages.value = null
    bookFinish.value = null
}

// Making new books to populate the library
// const inheritance = new Book("Inheritance", "Christopher Paolini", "601 pages", "Read")
// const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "280 pages", "Read")
// const mindset = new Book("Mindset", "Carol Dweck", "400", "Read")



// Testing 1 books info method
// console.log(inheritance.info());

// addToLibrary(inheritance);
// addToLibrary(harryPotter);
// addToLibrary(mindset);

// displayLibrary();