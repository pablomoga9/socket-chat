const express = require("express");
const cors = require("cors");
require('./utils/dbMongo.js')
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)


const server = app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`)
})

