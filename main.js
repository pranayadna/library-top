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
    let book = new Book(title, author, pages, isRead);

    myLibrary.push(book)
}

function displayEachBook(){
    const table = document.querySelector('table');
    table.innerHTML = '';
    
    // table header

    // Create the table header row
    const trHeader = document.createElement('tr');

    // Create table header cells
    const thEmpty = document.createElement('td');
    thEmpty.textContent = '\u00A0'; // Using '\u00A0' for non-breaking space
    trHeader.appendChild(thEmpty);

    const thTitle = document.createElement('th');
    thTitle.textContent = 'Title';
    trHeader.appendChild(thTitle);

    const thAuthor = document.createElement('th');
    thAuthor.textContent = 'Author';
    trHeader.appendChild(thAuthor);

    const thPages = document.createElement('th');
    thPages.textContent = 'Pages';
    trHeader.appendChild(thPages);

    const thStatus = document.createElement('th');
    thStatus.textContent = 'Status';
    trHeader.appendChild(thStatus);

    // Append the header row to the table
    table.appendChild(trHeader);

    // Append the table to the document body or any other desired container
    document.body.appendChild(table);


    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        
        // if(myLibrary.length > 0){
            
        //         table.removeChild(tr);
            
        //         myLibrary = [];
        // }
        
        // if (th) {
        //     th.remove();
        // }
        const th = document.createElement('th');
        tr.appendChild(th)
        th.textContent = i + 1;

        // if (title) {
        //     title.remove()
        // }
        const title = document.createElement('td');
        tr.appendChild(title);
        title.textContent = myLibrary[i].title;

        // if (author) {
        //     author.remove()
        // }
        const author = document.createElement('td');
        tr.appendChild(author);
        author.textContent = myLibrary[i].author;

        // if (pages) {
        //     pages.remove()
        // }
        const pages = document.createElement('td');
        tr.appendChild(pages);
        pages.textContent = myLibrary[i].pages;

        // if (status) {
        //     status.remove()
        // }
        const status = document.createElement('td');
        tr.appendChild(status);
        status.textContent = myLibrary[i].isRead;
    }
}

function addNewBook() {
    // e.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const statusInput = document.querySelector('#status');

    let titleBook = titleInput.value;
    let authorBook = authorInput.value;
    let pagesBook = pagesInput.value;
    let statusBook = statusInput.value;

    // console.log('Title:', titleBook);
    // console.log('Author:', authorBook);
    // console.log('Pages:', pagesBook);
    // console.log('Status:', statusBook);

    let book = new Book(titleBook, authorBook, pagesBook, statusBook);

    myLibrary.push(book)
    
    displayEachBook();

    // return [titleBook, authorBook, pagesBook, statusBook];
    
}


const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', (e) => {
    // let [titleResult, authorResult, pagesResult, statusResult] = addNewBook();

    e.preventDefault();
    addNewBook();
    // addBookToLibrary(titleResult, authorResult, pagesResult, statusResult);
    // console.log(myLibrary);
    // displayEachBook();
})




// console.log(this.Book);
// // myLibrary.push(this.Book)
// console.log(addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));
// console.log(addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281 pages', 'not read yet'));
// console.log(displayEachBook());
// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281 pages', 'not read yet');

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