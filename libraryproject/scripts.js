// Array to hold books
let myLibrary = [];

// Book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Function to add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Function to display books in the library
function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear the list before displaying

  myLibrary.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement("p");
    readStatus.textContent = book.isRead ? "Read" : "Not read yet";

    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    bookInfo.appendChild(readStatus);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.classList.add("read");
    toggleReadBtn.textContent = book.isRead ? "Mark as Unread" : "Mark as Read";
    toggleReadBtn.addEventListener("click", () => {
      book.isRead = !book.isRead;
      displayBooks();
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    actions.appendChild(toggleReadBtn);
    actions.appendChild(removeBtn);

    bookItem.appendChild(bookInfo);
    bookItem.appendChild(actions);

    bookList.appendChild(bookItem);
  });
}

// Form submission event listener
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting the default way

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);

  // Reset form after submission
  this.reset();
});
