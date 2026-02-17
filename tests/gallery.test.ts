import * as fs from 'fs';
import * as path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Gallery', () => {
  let modalModule: typeof import('../src/ts/main');

  beforeEach(async () => {
    document.body.innerHTML = html;

    HTMLDialogElement.prototype.showModal = jest.fn(function (
      this: HTMLDialogElement,
    ) {
      this.setAttribute('open', '');
    });
    HTMLDialogElement.prototype.close = jest.fn(function (
      this: HTMLDialogElement,
    ) {
      this.removeAttribute('open');
      this.dispatchEvent(new Event('close'));
    });

    jest.resetModules();
    modalModule = await import('../src/ts/main');
  });

  test('each gallery item has a play button', () => {
    const playBtns = document.querySelectorAll('.gallery__play');
    expect(playBtns.length).toBe(5);
  });

  test('clicking play button opens modal', () => {
    const playBtn =
      document.querySelector<HTMLButtonElement>('.gallery__play')!;
    playBtn.click();

    const modal = document.querySelector('.modal');
    expect(modal?.hasAttribute('open')).toBe(true);
  });

  test('clicking close button closes modal', () => {
    const playBtn =
      document.querySelector<HTMLButtonElement>('.gallery__play')!;
    const closeBtn =
      document.querySelector<HTMLButtonElement>('.modal__close')!;

    playBtn.click();
    closeBtn.click();

    const modal = document.querySelector('.modal');
    expect(modal?.hasAttribute('open')).toBe(false);
  });
});
