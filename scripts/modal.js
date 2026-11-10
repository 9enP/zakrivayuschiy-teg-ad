/* Модальное окно «Сохранить на память»:
   открытие по кнопке в футере, закрытие по кнопке ОК и по клику на подложку. */

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.save-button');
const closeModalButton = modal.querySelector('.modal__button');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
