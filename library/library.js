const myLibrary = [];

const addBookButton = document.querySelector(".add-book-button")
const addBookDialog = document.querySelector(".add-book-dialog")
console.log(addBookButton)


function Book(title, author, numberPages, wasRead) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.wasRead = wasRead
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function removeBook(bookId) {
    let bookToRemove = myLibrary.findIndex(book => book.id === bookId)
    myLibrary.splice(bookToRemove, 1)
    displayBooks()
}

function toggleRead(bookId) {
    const book = myLibrary.find(book => book.id === bookId)
    book.wasRead = !book.wasRead
    displayBooks()
}

function displayBooks() {
    const bookContainer = document.querySelector(".book-container")
    bookContainer.innerHTML = ""

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.numberPages}</p>
            <p>${book.wasRead ? "Read" : "Not Read"}</p>
            <button onclick="removeBook('${book.id}')">Remove</button>
            <button onclick="toggleRead('${book.id}')">Toggle Read</button>
        `

        bookContainer.appendChild(bookCard)
    })
}

displayBooks()

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal()
})

const form = addBookDialog.querySelector('.add-book-form');
form.addEventListener('submit', (e) => {
    // El formulario sabe que el botón es para enviar porque:
    // 1. Es el único botón en el formulario
    // 2. No tiene type="button", por lo que por defecto es type="submit"
    // 3. Cuando se hace click en un botón dentro de un form, se dispara el evento submit
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numberPages = parseInt(document.getElementById('numberPages').value);
    const wasRead = document.getElementById('wasRead').checked;

    const newBook = new Book(title, author, numberPages, wasRead);
    addBookToLibrary(newBook);
    
    form.reset();
    addBookDialog.close();

    console.log(myLibrary)
    displayBooks()
});