import { waitFor } from '../lib/dom.js';
export async function getApi() {
  await waitFor(5000);
  const request = await fetch('https://api.thecatapi.com/v1/images/search');
  const result = await request.json();
  const resultUrl = await result;
  const catUrls = await resultUrl.map(element => element.url);

  //   const catUrlsString = JSON.stringify(catUrls);

  return catUrls;
}
