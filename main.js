const myLibrary = [];

// constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`;
    }
}

// function to add book to library
// Book.prototype.addBookToLibrary = function(title) {
    
// }

function addBookToLibrary(title, author, pages, isRead) {
    let book1 = new Book(title, author, pages, isRead);

    // return new Book(title)
    return myLibrary.push(book1)
}

function displayEachBook(){
    const table = document.querySelector('table');

    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const th = document.createElement('th');
        tr.appendChild(th)
        th.textContent = i + 1;
        // tr.textContent = 'i + 1';
        // tr.textContent = 'TEST';

        // const td = document.createElement('td');
        // td.setAttribute()

        // for (let j = 0; j < 4; j++) {
        //     const td = document.createElement('td');
        //     tr.appendChild(td);
        //     // td.textContent = 'TEST';
        // }
        const title = document.createElement('td');
        tr.appendChild(title);
        title.textContent = myLibrary[i].title;

        const author = document.createElement('td');
        tr.appendChild(author);
        author.textContent = myLibrary[i].author;

        const pages = document.createElement('td');
        tr.appendChild(pages);
        pages.textContent = myLibrary[i].pages;

        const status = document.createElement('td');
        tr.appendChild(status);
        status.textContent = myLibrary[i].isRead;

        console.log(myLibrary[i]);
    }
}

// console.log(this.Book);
// // myLibrary.push(this.Book)
// console.log(addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));
// console.log(addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281 pages', 'not read yet'));
// console.log(displayEachBook());
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281 pages', 'not read yet');
displayEachBook();

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// console.log(theHobbit.info());

// Modal
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});