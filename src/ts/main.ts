const YOUTUBE_URL = 'https://www.youtube.com/embed/x6iyz1AQhuU';

const modal = document.querySelector<HTMLDialogElement>('.modal');
const iframe = document.querySelector<HTMLIFrameElement>('.modal__iframe');
const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close');
const galleryItems = document.querySelectorAll<HTMLElement>('.gallery__item');

let lastFocusedElement: HTMLElement | null = null;

function openModal(): void {
  if (!modal || !iframe) return;
  lastFocusedElement = document.activeElement as HTMLElement;
  iframe.src = `${YOUTUBE_URL}?autoplay=1`;
  modal.showModal();
  closeBtn?.focus();
}

function closeModal(): void {
  if (!modal || !iframe) return;
  iframe.src = '';
  modal.close();
  lastFocusedElement?.focus();
}

galleryItems.forEach((item) => {
  item.addEventListener('click', openModal);
  item.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });
});

closeBtn?.addEventListener('click', closeModal);

modal?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === modal) closeModal();
});

modal?.addEventListener('close', () => {
  if (iframe) iframe.src = '';
  lastFocusedElement?.focus();
});
