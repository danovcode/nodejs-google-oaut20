const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi : 'there'});
})

app.get('/damn', (req, res) => {
    res.send({hi : 'damn'});
})

const PORT = process.env.PORT || 8000
app.listen(8000);