
const { default: axios } = require('axios');
const express = require('express'); 
const cors = require('cors');
const app = express();              
const port = 5000;         
         
// Add headers before the routes are defined
app.use(
    cors({
        'allowedHeaders': '*',
        'origin': '*',
        'methods': '*',
        'preflightContinue': false,
        'credentials': true
    })
);

app.options('*', cors())

app.get('/get-giphy-api', async (req, res) => {
    const q = req.query.q
    const offset = req.query.offset
    const axRes = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=1D6OtSY6LByfU1KGCd4MqTGxsYBj7ppj&q=${q}&limit=24&offset=${offset}&rating=g&lang=en`
        )
        res.json({data: {gifs: axRes.data}});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});