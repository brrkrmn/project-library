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
        let status = document.getElementById("read-status").checked;
        const book = new Book(title, author, page, status);
        userLibrary.push(book);
        modal.style.display = 'none';
        document.querySelector(".new-book-form").reset();
        showBookCard();
        addBookInfoToCard(userLibrary);
        console.log(book);
    });
}

function showBookCard() {
    const sampleCard = document.querySelector(".sample-book-card");
    const cardClone = sampleCard.cloneNode(true);
    cardClone.classList.remove("sample-book-card");
    document.querySelector(".content").appendChild(cardClone);
}

function addBookInfoToCard(userLibrary) {
    let lastBook = userLibrary[userLibrary.length-1];
    const lastCard = document.querySelector(".content").lastChild;
    lastCard.querySelector(".card-title").textContent = lastBook.title;
    lastCard.querySelector(".card-author").textContent = lastBook.author;
    lastCard.querySelector(".card-page-number").textContent = lastBook.page;
    if (lastBook.status === false) {
        lastCard.querySelector(".card-status-button").style.backgroundColor = "#DF4545";
        lastCard.querySelector(".status-text").textContent = "Not Read";
    }
}

const modal = document.querySelector(".modal-page");
const modalButton = document.querySelector(".new-book-button");
const modalOverlay = document.querySelector(".modal-overlay")

openModal();
closeModal();
addBookToLibrary();
changeReadStatus();
