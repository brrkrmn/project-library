function openAndCloseModal () {
    const modal = document.querySelector(".modal-page");
    const modalButton = document.querySelector(".new-book-button");
    const modalOverlay = document.querySelector(".modal-overlay")
    openModal(modal, modalButton);
    closeModal(modal, modalOverlay);
}

function openModal(modal, modalButton) {
    modalButton.addEventListener("click", () => {
        modal.style.display = 'block';
    });
}

function closeModal(modal, modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.style.display = 'none';
        }
    });    
}

function changeReadStatus() {
    const readButton = document.querySelectorAll(".card-status-button");
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].addEventListener("click", () => {
            if (readButton[i].textContent === "Not Read") {
                readButton[i].textContent = "Read";
                readButton[i].style.backgroundColor = "#f6b616cc";
            } else {
                readButton[i].textContent = "Not Read";
                readButton[i].style.backgroundColor = "#DF4545";
            }
        });
    }
}

openAndCloseModal();
changeReadStatus();

