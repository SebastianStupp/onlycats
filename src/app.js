import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { getApi } from './components/api';
import Icon from './catPaw.jpg';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });

  const catPawRight = createElement('img', {
    className: 'catPawLeft',
    src: Icon
  });

  const catPawLeft = createElement('img', {
    className: 'catPawLeft',
    src: Icon
  });

  const heading = createElement('h1', {
    className: 'heading',
    innerText: 'OnlyCats'
  });

  appendContent(header, [catPawRight, heading, catPawLeft]);

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
