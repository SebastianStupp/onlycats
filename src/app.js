import './app.scss';
import { createElement, appendContent, waitFor } from './lib/dom';
import { getApi } from './components/api';
import Icon from './components/catPaw.png';

import CatRight from './components/blackCatRight.svg';
import CatLeft from './components/blackCatLeft.svg';

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

  const catRight = createElement('img', {
    className: 'catRight',
    src: CatRight
  });

  const catLeft = createElement('img', {
    className: 'catLeft',
    src: CatLeft
  });

  appendContent(footer, [catRight, catLeft]);

  const catSection = createElement('section', {
    className: 'catSection'
  });

  appendContent(main, catSection);

  async function createImage() {
    //
    const loading = createElement('div', {
      innerText: 'Loading...',
      className: 'loading'
    });
    appendContent(main, loading);
    await waitFor(1000);
    loading.innerText = 'Loading...';
    await waitFor(2000);
    loading.innerText = 'Loading....';
    await waitFor(3000);
    loading.innerText = 'Loading.....';
    //
    const randomCat = await getApi();
    main.removeChild(loading);
    const createCatImage = await createElement('img', {
      className: 'catImage',
      src: randomCat
    });
    appendContent(catSection, createCatImage);
  }
  createImage().then(() => {
    setInterval(async function() {
      const randomCatChange = await getApi();
      const test = document.querySelector('.catImage');
      test.src = await randomCatChange;
    }, 3000);
  });

  return [header, main, footer];
}
