const express = require('express')
require('dotenv').config()
const contactRoutes = require('./routes/contactRoutes')
const errorHandler = require('./middleware/errorHandler')

const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use(contactRoutes);
app.use(errorHandler);  // handles all errors


app.listen(port, () => {
    console.log('listening on port',port)
})