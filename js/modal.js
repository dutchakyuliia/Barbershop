(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };


  refs.closeModalBtn.addEventListener('click', toggleModal);

  function openModal(item) {item.addEventListener('click', toggleModal)};
  refs.openModalBtn.forEach(openModal);
  


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();