import renderApi from '@api/render-api';

renderApi.auth(process.env.RENDER_API_KEY);
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));