require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const db = mongoose.connection;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});

app.use(express.json());
app.use(cors())

app.get('/titles', (req,res) => {

    const options = {
      method: 'GET',
      url: 'https://watchmode.p.rapidapi.com/search/',
      params: {search_field: 'name', search_value: 'superman', types: 'tv,movie'},
      headers: {
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})



app.listen(PORT,()=>{
    console.log('Server Connected', PORT);
});
