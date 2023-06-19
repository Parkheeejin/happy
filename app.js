const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/1.html');
})

app.listen(3000);