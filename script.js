const books = [
    {
        title: "Elantris",
        author: "Brandon Sanderson",
        pages: 592,
        read: false,
    },
    {
        title: "The Final Empire",
        author: "Brandon Sanderson",
        pages: 541,
        read: true,
    },
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        pages: 1008,
        read: false,
    }
];

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