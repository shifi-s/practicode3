import renderApi from '@api/render-api';
require('dotenv').config();
const express = require('express');
const renderApi = require('render-api');

const app = express();
const PORT = process.env.PORT || 3000;

renderApi.auth(process.env.RENDER_API_KEY);

app.get('/apps', async (req, res) => {
    try {
        const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch applications', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
