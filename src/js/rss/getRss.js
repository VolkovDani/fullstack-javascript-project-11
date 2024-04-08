import axios from 'axios';

const makeUrl = (url) => {
  const allOriginsUrl = new URL('https://allorigins.hexlet.app/get');
  allOriginsUrl.searchParams.append('disableCache', true);
  allOriginsUrl.searchParams.append('url', url);
};

export default (url) => new Promise((resolve, reject) => {
  const preparedUrl = makeUrl(url);
  axios({
    method: 'get',
    url: preparedUrl,
    responseType: 'text',
  })
    .then((res) => {
      // const result = parseRss(res);
      // console.log(result);
      // if (Object.keys(result.feed).length === 0) reject(new Error('emptyRss'));
      const preparedData = JSON.parse(res.data).contents;
      // console.log(preparedData);
      resolve(preparedData);
    })
    .catch(reject);
});
