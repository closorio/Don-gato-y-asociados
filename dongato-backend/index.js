const express = require('express');
const cors = require('cors')
const app = express();

// middlewares
app.use(cors())
app.use(express.json());
//app.use(express.urlencoded())

//routes
app.use(require('./routes/routes'))

app.listen(3200)
console.log('server on port 3200')


module.exports = app;
