const express = require("express")

const authRoute = require('./routes/authorRoute');
const bookRoute = require('./routes/bookRoute')
const storeRoute = require('./routes/storeRoute')
const store_bookRoute = require('./routes/store_bookRoute')

const app = express()



const PORT = process.env.PORT || 5000;
app.use(express.json()); // for parsing application/json

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


app.use("/authors", authRoute)
app.use("/books", bookRoute)
app.use("/stores", storeRoute)
app.use("/stores_books", store_bookRoute)