var express = require("express");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
