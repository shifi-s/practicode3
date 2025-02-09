import renderApi from '@api/render-api';

renderApi.auth('rnd_0ZPmcbwTxJ5Dd1ECdtgqw8GPwFyd');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));