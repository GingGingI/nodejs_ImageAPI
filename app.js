const express = require('express')
const router = require('./router/image')

const app = express()
const port = process.env.PORT || 3000;

app.use('/images', router)

app.listen(port, () => {
    console.log(`app is Listening at ${port}`);
})