# Gallery Content Component

Responsive gallery component with interactive YouTube video modal, built as a take-home task for the Web Developer role at SmartRecruiters.

## 🎬 Demo Video

[![Video Demo](https://www.youtube.com/watch?v=x6iyz1AQhuU)

## NOTE: YouTube URL Formats

-`https://www.youtube.com/watch?v=x6iyz1AQhuU` — Browser playback, not embeddable in iframes
-`https://www.youtube.com/embed/x6iyz1AQhuU` — Embeddable format for iframes, supports autoplay parameter

## Features

- [x] Project setup with HTML, SCSS and TypeScript
- [x] Responsive gallery component based on Figma designs
- [x] Interactive modal with embedded YouTube video autoplay
- [x] Modal close button stops video playback
- [x] WCAG 2.1 AA accessibility compliance
- [x] Keyboard navigation support with proper ARIA attributes
- [x] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Unit tests for component behavior and user interactions

## Tech Stack

- **HTML5** — Semantic markup
- **SASS/SCSS** — Styling with BEM naming convention
- **TypeScript** — Interactive functionality
- **Inter** — Typography via Google Fonts
- **Jest** — Unit testing

> No JS frameworks (React, Vue, Angular) or CSS frameworks (Tailwind, Bootstrap) were used.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

git clone https://github.com/Michaellinaresxk/SmartRecruiters-Test.git
cd SmartRecruiters-Test
npm install

### Development

Compile SCSS and TypeScript in watch mode (run in separate terminals):

npm run watch:css
npm run watch:ts

Then open `index.html` with a live server:

### Build

Compile SCSS and TypeScript for production:

npm run build:css
npm run build:ts

### Tests

npm run test

## Available Scripts

| Command | Description |
| `npm run build:css` | Compile SCSS to CSS |
| `npm run build:ts` | Compile TypeScript to JS |
| `npm run watch:css` | Watch and compile SCSS on save |
| `npm run watch:ts` | Watch and compile TS on save |
| `npm run test` | Run Jest unit tests |
| `npm run test:watch` | Run tests in watch mode |

## Accessibility

- Semantic HTML elements (`<dialog>`, `<button>`, `<em>`, `<strong>`)
- ARIA attributes (`aria-label`, `aria-hidden`, `role="button"`)
- Keyboard navigation (Tab, Enter, Escape)
- Focus trapping within modal
- Descriptive alt text on all images

## Design Reference

- [Figma Designs](https://www.figma.com/design/V6vjx6d5Nw3WiXT60c8u4F/SmartRecruiters-Attrax---Candidate-Task?node-id=12-464&t=HYaMkHwt6tzXLZaC-0)

- [Inter Font](https://fonts.google.com/specimen/Inter)
