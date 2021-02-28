const mongoose = require("mongoose");
const db = require("../models");

let workoutSchema = new Schema({
  day: { type: Date, default: Date.now },

  exercise: [
    {
      type: { type: String, require: true },
      name: { type: String, require: true },
      duration: { type: Number, require: true },
      weight: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
