const modal = document.querySelector<HTMLDialogElement>('.modal');
const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close');
const galleryItems = document.querySelectorAll<HTMLElement>('.gallery__item');

function openModal(): void {
  if (!modal) return;
  modal.showModal();
}

function closeModal(): void {
  if (!modal) return;
  modal.close();
}

galleryItems.forEach((item) => {
  item.addEventListener('click', openModal);
});

closeBtn?.addEventListener('click', closeModal);
