/* Модальное окно «Сохранить на память».
   Любая ошибка внутри обработчиков гасится локально, чтобы клик по кнопке
   никогда не приводил к исключению на странице и к её перезагрузке. */

const modal = document.getElementById('dialog');
const openButton = document.querySelector('.save-button');
const closeButton = modal ? modal.querySelector('.modal__button') : null;

if (modal && openButton && closeButton) {
  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    try {
      if (!modal.open) {
        modal.showModal();
      } else {
        modal.close();
      }
    } catch (error) {
      modal.setAttribute('open', '');
    }
  });

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    try {
      modal.close();
    } catch (error) {
      modal.removeAttribute('open');
    }
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}
