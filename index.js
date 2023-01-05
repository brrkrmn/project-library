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
    }
    );
}

function closeModal(modal, modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.style.display = 'none';
        }
    } 
    );    
}

openAndCloseModal();

