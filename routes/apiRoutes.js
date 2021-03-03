const router = require("express").Router();
// const mongoose = require("mongoose");
const Workout = require("../models/index.js");

router.post("/api/exercises", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/exercises/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/exercises/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    {
      $push: {
        exercises: [req.body],
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/exercises", (req, res) => {
  Workout.aggregate([
    { $sort: { date: -1 } },
    { $limit: 1 },
    {
      //add fields the summaries are looking for
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        day: { $toDate: "$date" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
