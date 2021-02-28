const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/Workout", (req, res) => {
  Workout.aggregate()
    .create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
///////////////////
db.sales.aggregate([
  {
    $group: {
      _id: { day: { $dayOfYear: "$date" }, year: { $year: "$date" } },
      totalAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
      count: { $sum: 1 },
    },
  },
]);
////////////////////
router.post("/api/Workout/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/Workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
