// Backend (server.js - Node.js + Express)
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let locations = [];

app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    locations.push({ latitude, longitude, timestamp: new Date() });
    console.log(`Nova localização: Lat: ${latitude}, Lng: ${longitude}`);
    res.sendStatus(200);
});

app.get('/locations', (req, res) => {
    res.json(locations);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
