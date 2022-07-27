function Book(title, author, pages, complete) {
    this.title = title
    this.author = author
    this.pages = pages
    this.complete = complete
    this.info = function() {
        this.title, this.author, this.pages, this.complete; 
    }

}

const inheritance = new Book("Inheritance", "Christopher Paolini", "601 pages", "Completed")

console.log(inheritance.info())
// console.log(inheritance.info());