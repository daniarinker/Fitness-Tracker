var express = require("express");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
var morgan = require("morgan");

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(morgan("tiny"));

var apiRoutes = require("./routes/apiRoutes");

app.use(apiRoutes);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
