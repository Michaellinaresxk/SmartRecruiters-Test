import * as fs from 'fs';
import * as path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Modal', () => {
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

  test('opens modal with autoplay', () => {
    modalModule.openModal();

    const modal = document.querySelector('.modal');
    const iframe = document.querySelector<HTMLIFrameElement>('.modal__iframe');

    expect(modal?.hasAttribute('open')).toBe(true);
    expect(iframe?.getAttribute('src')).toContain('autoplay=1');
  });

  test('closes modal and clears video', () => {
    const iframe = document.querySelector<HTMLIFrameElement>('.modal__iframe')!;

    modalModule.openModal();
    modalModule.closeModal();

    expect(iframe.getAttribute('src')).toBe('');
  });

  // MODAL ERROR HANDLING TESTS
  test('openModal does nothing if modal is missing', () => {
    // DOM without modal element
    document.body.innerHTML = `
      <iframe class="modal__iframe" src=""></iframe>
    `;

    expect(() => modalModule.openModal()).not.toThrow();
  });

  test('openModal does nothing if iframe is missing', () => {
    document.body.innerHTML = `
      <dialog class="modal"></dialog>
    `;

    expect(() => modalModule.openModal()).not.toThrow();
  });
});
