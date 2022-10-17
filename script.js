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
    // let newBookDiv = document.createElement("div") // Another attempt
    // newBookDiv.append(newBook);
    // container.appendChild(newBookDiv);
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

// Currently grabs the last book object, makes a new row, writes each key value to a new cell and appends 
// each cell to the row and then appends the row to the table. It isn't a clean way and I don't like it.
displayBook = () => {

    let obj = myLibrary.slice(-1)[0]
    let newRow = document.createElement("tr")

    let cellOne = document.createElement("td")
    cellOne.textContent = obj.title
    newRow.appendChild(cellOne)

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

    // Try the other method of writing the content to a div and then appending that div to the container
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


// Previous Testing code for Object library
// ----------------------------------------------------------------------------------------------------------------

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

/*
I've managed to get the library working ie. every new book is pushed to the library array, my problem is reading the new book(object). 

So the function currently grabs the last book object in the array, makes a new row, writes each key value to a new cell and appends each cell to the row and then appends the row to the table. Where I am stuck now is adding functionality for a delete button
to actually access it the specified object. 

I've searched on stack overflow and googled various options but I can't seem to find anything relevant, how can I access an object inside an array, whilst also being able 
to display it? I've been stuck for a week on this. TOP project page suggests "You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array."
but I am honestly stumped. Any advice would be appreciated. 

- You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array
This is honestly the easiest way, but for it to work properly, you can't be rendering the books 1 by 1. What you want to do, is every time a book is deleted or added, re-render the entire array. 
If you use a loop to do this, you will be able to access the index of each element in the array on each loop iteration and attach it to the DOM element somehow, like with a data attribute (look it up if you don't know it).

------------------------------------------------------------------------------------------------
// Why do I get so scared/anxious to procratinate programming? It isn't the difficulty, I think it is because I'm worried about the quality of my work, and not meeting my expectations. 
// I've proven to myself I can overcome anything, learn anything, change anything, control my mind, tackle the biggest challenges and so much more. This performance anxiety is not suiting me
// I truly do believe in myself. I just need to remember that I do when tackling programming and tell myself it is ok to fail here because failing is how you test the program out and improve it
// It is digital Lego building. I can create, and combine here and once coupled with my creativity...I will be more of a monster. So don't be scared thanks to "Avoidance". The worst that can happen
// is that I will fail yet I have to fail to improve. I love acquiring theoretical knowledge. This is the acquisition of practical knowledge. Don't worry about the future, or past, just focus on 
// being you, working at it this time. I love creating, I love building and I love being me. Acquiring knowledge is what I love, this is a form of it. Tackle it the same way I would reading books. 
// I believe in myself. I've no doubt I can do it. 
// My hourly rate is R50 000 per hour :D . Treat my time as such


*/
