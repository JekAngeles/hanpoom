const express = require('express');
const app = express();

require('dotenv').config()

app.use(express.json())

const port = process.env.PORT || 3000

app.use('/picking-slips', require('./routes/pickingslips.router'))
// app.use('/picking-slips', () => {
//     return "Hello World"
// })

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})