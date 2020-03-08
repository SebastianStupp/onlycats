import './app.scss';
import { createElement } from './lib/dom';

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

  return [header, main, footer];
}
