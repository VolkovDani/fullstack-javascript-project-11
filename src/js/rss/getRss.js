import axios from 'axios';

export default (url) => new Promise((resolve, reject) => {
  const allOriginsUrl = `https://allorigins.hexlet.app/raw?disableCache=true&url=${encodeURIComponent(url)}`;
  axios({
    method: 'get',
    url: allOriginsUrl,
    responseType: 'text',
  })
    .then((res) => {
      // const result = parseRss(res);
      // console.log(result);
      // if (Object.keys(result.feed).length === 0) reject(new Error('emptyRss'));
      resolve(res);
    })
    .catch(reject);
});
