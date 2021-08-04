const registrationForm = document.getElementById("registration-form");

import { addBookToLibrary, displayBooks } from "./book.js";

window.document.addEventListener("load", () => {
    displayBooks();
});

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookTitle = e.target.elements["book-title"].value;
    const bookAuthor = e.target.elements["book-author"].value;
    const bookPageNum = e.target.elements["book-page-number"].value;
    const bookDescription = e.target.elements["book-description"].value;
    const readingStatus = e.target.elements["reading-status"].value;

    if (bookTitle && bookAuthor && bookPageNum && bookDescription && readingStatus) {
        addBookToLibrary(bookTitle, bookAuthor, bookPageNum, readingStatus, bookDescription);
        displayBooks();
    }

});