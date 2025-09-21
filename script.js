const books = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); // generates a unique id, preventing issues when books get removed
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book (title, author, pages, read);
    books.push(newBook);
}