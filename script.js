const booksContainer = document.querySelector(".books-container");

const addButton = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-btn");

const form = document.querySelector("form");

addButton.addEventListener("click", () => {
    modal.showModal();
});

closeModalButton.addEventListener("click", () => {
    modal.close();
});

form.addEventListener("submit", e => {
    processNewBook();
    e.preventDefault();
    modal.close();
});

const books = [
    {
        title: "Elantris",
        author: "Brandon Sanderson",
        pages: 592,
        read: false,
        id: 1,
    },
    {
        title: "The Final Empire",
        author: "Brandon Sanderson",
        pages: 541,
        read: true,
        id: 2,
    },
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        pages: 1008,
        read: false,
        id: 3,
    }
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); // generates a unique id, preventing issues when books get removed
}

function processNewBook(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);
};

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book (title, author, pages, read);
    books.push(newBook);

    displayBooks();
}

function displayBooks(){
    booksContainer.textContent = ""; // clears existing cards first to prevent duplicates when re-rendering

    for (let book of books){
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", book.id);

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;

        const authorName = document.createElement("p");
        authorName.textContent = book.author;

        const numberOfPages = document.createElement("p");
        numberOfPages.textContent = `${book.pages} pages`;

        const readStatus = document.createElement("p");
        readStatus.textContent = book.read ? "Read" : "Not read";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", e => {
            const selectedBook = e.target.parentElement;
            const selectedBookID = selectedBook.getAttribute("data-id");

            const selectedBookIndex = books.findIndex(book => book.id == selectedBookID);

            books.splice(selectedBookIndex, 1);

            displayBooks();
        });

        card.append(bookTitle, authorName, numberOfPages, readStatus, deleteButton);
        booksContainer.append(card);
    }
}

displayBooks();