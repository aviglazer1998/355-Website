const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbURI = "mongodb+srv://aviglazer:Password123@chalkboard.mc7fa.mongodb.net/chalkboard?retryWrites=true&w=majority";
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(process.env.PORT || 8000))
	.catch((err) => console.log(err));

app.listen(() => {
	console.log(`App listening on port 8000`);
});

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/5.7/index.html", (request, response) => {
	response.sendFile(__dirname + "/5.7/index.html");
});
