export async function getApi() {
  const request = await fetch('https://api.thecatapi.com/v1/images/search');
  const result = await request.json();
  const resultUrl = await result;
  const catUrls = resultUrl.map(element => element.url);
  return catUrls;
}
