const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        require: true,
      },
      name: {
        type: String,
        require: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;