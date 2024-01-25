const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  num1 = parseFloat(req.body.num1);
  num2 = parseFloat(req.body.num2);
  result = num1 + num2;
  res.send("Your number is " + result);
});
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  weight = Number(req.body.w);
  height = Number(req.body.h) ;
  result = Math.round(weight / Math.pow(height, 2)) ;
  res.send("<h1>Your BMI is " + result + "</h1>");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
