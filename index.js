function openModal() {
    modalButton.addEventListener("click", () => {
        modal.style.display = 'block';
    });
}

function closeModal() {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.style.display = 'none';
        }
    });    
}

function changeReadStatus() {
    const readButton = document.querySelectorAll(".card-status-button");
    const statusText = document.querySelectorAll(".status-text");
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].addEventListener("click", () => {
            if (statusText[i].textContent === "Not Read") {
                statusText[i].textContent = "Read";
                readButton[i].style.backgroundColor = "#f6b616cc";
            } else {
                statusText[i].textContent = "Not Read";
                readButton[i].style.backgroundColor = "#DF4545";
            }
        });
    }
}

function Book(title, author, page, status) {
    this.title = title
    this.author = author 
    this.page = page
    this.status = status
}

function addBookToLibrary() {
    let userLibrary = [];
    const addBookButton = document.querySelector(".add-book-button");
    addBookButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        let title = document.getElementById("book-title").value;
        let author = document.getElementById("book-author").value;
        let page = document.getElementById("book-page-number").value;
        let status = document.getElementById("read-status").value;
        const book = new Book(title, author, page, status);
        userLibrary.push(book);
        modal.style.display = 'none';
        showBookCard(book);
    });
}

function showBookCard(book) {
    const bookCard = document.createElement("Div");
    bookCard.classList.add("book-card");

    const cardContent = document.createElement("Div");
    cardContent.classList.add("card-content");

    const cardActions = document.createElement("Div");
    cardActions.classList.add("card-actions");

    const cardTitle = document.createElement("Div");
    cardTitle.classList.add("card-title");

    const cardAuthor = document.createElement("Div");
    cardAuthor.classList.add("card-author");

    const cardPageNumber = document.createElement("Div");
    cardPageNumber.classList.add("card-page-number");

    const cardStatusButton = document.createElement("Button");
    cardStatusButton.classList.add("card-status-button");

    document.querySelector(".content").appendChild(bookCard);
    bookCard.appendChild(cardContent);
    bookCard.appendChild(cardActions);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardPageNumber);

    cardActions.appendChild(cardStatusButton);
}

const modal = document.querySelector(".modal-page");
const modalButton = document.querySelector(".new-book-button");
const modalOverlay = document.querySelector(".modal-overlay")

openModal();
closeModal();
changeReadStatus();
addBookToLibrary();