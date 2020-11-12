const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi : 'there'});
})

app.get('/damn', (req, res) => {
    res.send({hi : 'damn'});
})

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);