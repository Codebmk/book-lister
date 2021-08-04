let library = [];
const bookListDiv = document.getElementById("book-list");

function Book(title, author, numOfPages, readingStatus, description) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readingStatus = readingStatus;
    this.description = description;
}

export function addBookToLibrary(title, author, numOfPages, readingStatus, description) {
    let newBook = new Book(title, author, numOfPages, readingStatus, description);
    library.push(newBook);
}

export function displayBooks() {
    console.log(library);

    if (library) {
        library.forEach(book => {
            const div = document.createElement("div");
            div.className = "book-item";
            div.innerHTML = `
                <button type="button">Delete</button>
                <div class="book-wrapper">
                    <div class="top-section">
                        <div class="top-left-section">
                            <span>
                                <h3>${book.title}</h3>
                                <span>${book.numOfPages}</span>
                            </span>
                            <small>${book.author}</small>
                        </div>
                        <h4 class="top-right-section">${book.readingStatus}</h4>
                    </div>
                    <p class="book-description">${book.description}</p>
                </div>
            `;
            bookListDiv.appendChild(div);
        });
    } else {
        const div = document.createElement("div");
        div.className = "empty-book-item";
        div.innerHTML = `
            <p>You have no books saved!</p>
        `;
        bookListDiv.appendChild(div);
    }
    
}