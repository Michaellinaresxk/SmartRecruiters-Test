const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/x6iyz1AQhuU' as const;

// DOM elements
const modal = document.querySelector<HTMLDialogElement>('.modal');
const iframe = document.querySelector<HTMLIFrameElement>('.modal__iframe');
const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close');
const galleryItems = document.querySelectorAll<HTMLElement>('.gallery__item');
const playButtons =
  document.querySelectorAll<HTMLButtonElement>('.gallery__play');

let lastFocusedElement: HTMLElement | null = null;

function handleKeydown(e: KeyboardEvent): void {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openModal();
  }
}

export function openModal(): void {
  if (!modal || !iframe) return;

  lastFocusedElement = document.activeElement as HTMLElement;
  iframe.src = `${YOUTUBE_BASE_URL}?autoplay=1`;
  modal.showModal();

  closeBtn?.focus();
  setTimeout(() => closeBtn?.focus(), 0); // Safari fix
}

export function closeModal(): void {
  if (!modal || !iframe) return;
  modal.close();
  iframe.src = '';
}

galleryItems.forEach((item: HTMLElement) => {
  item.addEventListener('click', openModal);
  item.addEventListener('keydown', handleKeydown);
});

playButtons.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', openModal);
});

closeBtn?.addEventListener('click', closeModal);

modal?.addEventListener('close', () => {
  if (iframe) iframe.src = '';
  lastFocusedElement?.focus();
});

modal?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === modal) closeModal();
});
