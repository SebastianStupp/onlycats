import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { getApi } from './components/api';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });

  const main = createElement('main', {
    className: 'main'
  });

  const footer = createElement('footer', {
    className: 'footer'
  });

  const catSection = createElement('section', {
    className: 'catSection'
  });

  appendContent(main, catSection);

  async function createImage() {
    const randomCat = await getApi();

    const createCatImage = await createElement('img', {
      className: 'catImage',
      src: randomCat
    });
    appendContent(catSection, createCatImage);
  }
  createImage();

  return [header, main, footer];
}

// (async () => {
//     const select = await createFckNameOptions();
//     await appendContent(main, select);
