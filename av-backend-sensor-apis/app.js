// packages
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

// express setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("combined"));

// api route mapping
const sensorRouter = require("./routes/sensors");
app.use("/api/sensor", sensorRouter);

const PORT = process.env.PORT || 4000;

// connect to mongodb cluster, then start server
mongoose
  .connect(process.env.MONGO_CONNECTION_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to mongo database: ", err);
  });

module.exports = app;
