
// My library array
let myLibrary = [];

// Creating am object with a function in it to display info
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

// Making new books to populate the library
const inheritance = new Book("Inheritance", "Christopher Paolini", "601 pages", "Completed")
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "280 pages", "Not started")
const mindset = new Book("Mindset", "Carol Dweck", "400", "Complete")

// Testing 1 books info method
console.log(inheritance.info())
// console.log(inheritance.info());

addToLibrary(inheritance);
addToLibrary(harryPotter);
addToLibrary(mindset);

displayLibrary();