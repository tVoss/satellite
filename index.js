const express = require('express')
const path = require('path')

const api = require('./api');

const app = express();

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'static')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
});

app.listen(3000, () => {
    console.log('satellite running on port 3000')
})
