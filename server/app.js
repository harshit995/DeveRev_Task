require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const cors = require("cors");
const router = require("./routes/userRoutes.js")
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8000


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser())

app.use(express.json());
app.use(router)


connectDB();
app.use("/uploads", express.static("./uploads"))

app.listen(PORT, () => {
    console.log(`Application running on ${PORT}`)
})