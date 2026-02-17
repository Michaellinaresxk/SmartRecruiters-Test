const YOUTUBE_URL = 'https://www.youtube.com/embed/x6iyz1AQhuU';

const modal = document.querySelector<HTMLDialogElement>('.modal');
const iframe = document.querySelector<HTMLIFrameElement>('.modal__iframe');
const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close');
const galleryItems = document.querySelectorAll<HTMLElement>('.gallery__item');
const playButtons =
  document.querySelectorAll<HTMLButtonElement>('.gallery__play');

let lastFocusedElement: HTMLElement | null = null;

export function openModal(): void {
  if (!modal || !iframe) return;

  lastFocusedElement = document.activeElement as HTMLElement;
  iframe.src = `${YOUTUBE_URL}?autoplay=1`;
  modal.showModal();

  closeBtn?.focus();
  setTimeout(() => closeBtn?.focus(), 0); // Safari fix
}

export function closeModal(): void {
  if (!modal || !iframe) return;
  modal.close();
  iframe.src = '';
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

playButtons.forEach((btn) => {
  btn.addEventListener('click', () => openModal());
});

closeBtn?.addEventListener('click', closeModal);

modal?.addEventListener('close', () => {
  if (iframe) iframe.src = '';
  lastFocusedElement?.focus();
});

modal?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === modal) closeModal();
});
