// * TODO: CHECK FREECODECAMP AS AN ALTERNATE FOR PRACTICE
// * TODO: New book button that brings up the form from each display - LEARNT: How to toggle elements between hidden and visible using classlist.toggle and the "hidden" attribute
// * TODO: Write each book to table row OR append each object Book to a new div
// TODO: Add delete button functionality
// TODO: Add "Read/Unread" button functionality
// TODO: CSS - Style for table - Center table
// TODO: HTML: Column size - maybe 3 width?

// Grabbed new book, save and return buttons, pop up form, and table elements -> variables
const popUp = document.querySelector("#popUp")
const saveBtn = document.querySelector("#saveButton")
const newBookBtn = document.querySelector("#new_book_button")
const tableDisplay = document.querySelector("table")
const returnBtn = document.querySelector("#returnButton")
const container = document.querySelector(".container")
const tableBody = document.querySelector(".table-body")


// Assigning each textbox content of the entered Book to a variable
let bookTitle = document.querySelector("#book_title")
let bookAuthor = document.querySelector("#book_author")
let bookPages = document.querySelector("#book_pages")
let bookFinish = document.querySelector("#book_finished")



// My library array
let myLibrary = [];

// Creating an object with a function in it to display info
function Book (title, author, pages, complete){
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
addToLibrary = () => {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let readBook = bookFinish.value; 
    let newBook = new Book(title, author, pages, readBook)
    myLibrary.push(newBook);
}

// Function to loop through array and display each book 
displayLibrary = () => {
    myLibrary.forEach(i => {
        console.table(i);
    });
}

// Wipes the values from each textbox for a new book
clearForm = () => {

    bookTitle.value = null 
    bookAuthor.value = null 
    bookPages.value = null
    bookFinish.value = null
}

// Toggles visibility by adding/removing the "hidden" class attribute on these elements
toggle = () => {
    popUp.classList.toggle("hidden")
    tableDisplay.classList.toggle("hidden")
    newBookBtn.classList.toggle("hidden")
}


displayBook = () => {

    // let div = document.createElement("row")
    // let divTwo = document.createElement("row")
    // createdBook.bookTitle, createdBook.bookAuthor, createdBook.bookPages, createdBook.bookFinish
    let obj = myLibrary.slice(-1)[0]
    let newRow = document.createElement("tr")
//     div.textContent = obj.title
//     container.appendChild(div);
//     divTwo.textContent = obj.author
//     container.appendChild(divTwo);
    let cellOne = document.createElement("td")
    cellOne.textContent = obj.title
    newRow.appendChild(cellOne)
    //cellOne.appendChild(obj.title)
    let cellTwo = document.createElement("td")
    cellTwo.textContent = obj.author
    newRow.appendChild(cellTwo)
    let cellThree = document.createElement("td")
    cellThree.textContent = obj.pages
    newRow.appendChild(cellThree)
    let cellFour = document.createElement("td")
    cellFour.textContent = obj.complete
    newRow.appendChild(cellFour)
    tableBody.appendChild(newRow)
    //newRow.appendChild(cellOne, cellTwo, cellThree, cellFour);
    //, cellTwo, cellThree, cellFour
}


// E.Listener which creates and adds book to library
saveBtn.addEventListener("click", () => {
     
    // let newBook = bookTitle
    // newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookFinish.value)
    addToLibrary();
    displayBook();
    clearForm();
    toggle();
    displayLibrary();
})

// Two below - calls the function for visibility between the form page for a new book and the info page for current books
newBookBtn.addEventListener("click", () => {
    toggle();
})

returnBtn.addEventListener("click", () => {
    toggle();
})


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