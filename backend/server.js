const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const goalRoutes = require("./routes/goals.js");
const userRoutes = require("./routes/users.js");
const {errorHandler} = require("./middleware/errorMidlleware.js");

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
const app = express();
app.listen(PORT,() => console.log(`Listening on PORT ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/goals",goalRoutes);
app.use("/api/users",userRoutes);
app.use(errorHandler);