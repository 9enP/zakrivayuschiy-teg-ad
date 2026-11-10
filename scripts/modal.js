/* Модальное окно «Сохранить на память».
   Обработчики навешиваются скриптом, повторное открытие и закрытие
   защищены проверкой состояния — клик не приводит к перезагрузке страницы. */

const modal = document.getElementById('dialog');
const openButton = document.querySelector('.save-button');
const closeButton = modal.querySelector('.modal__button');

openButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!modal.open) {
    modal.showModal();
  }
});

closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (modal.open) {
    modal.close();
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
