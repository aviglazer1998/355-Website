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

app.use(express.static("/public"));

app.listen(() => {
	console.log(`App listening on port 8000`);
});

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/public/HTML/index.html");
});

app.get("/public/HTML/resume.html", (request, response) => {
	response.sendFile(__dirname + "/public/HTML/resume.html");
});

app.get("/public/HTML/weatherApp.html", (request, response) => {
	response.sendFile(__dirname + "/public/HTML/weatherApp.html");
});
