import './app.scss';
import { createElement } from './lib/dom';
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
  getApi();
  return [header, main, footer];
}
