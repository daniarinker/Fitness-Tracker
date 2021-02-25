const router = require("express").Router();
const workoutTrack = require("../models/workoutTrack.js");

router.post("/api/workoutTrack", ({ body }, res) => {
  workoutTrack.create(body)
    .then(dbworkoutTrack => {
      res.json(dbworkoutTrack);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workoutTrack/bulk", ({ body }, res) => {
  workoutTrack.insertMany(body)
    .then(dbworkoutTrack => {
      res.json(dbworkoutTrack);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workoutTrack", (req, res) => {
  workoutTrack.find({})
    .sort({ date: -1 })
    .then(dbworkoutTrack => {
      res.json(dbworkoutTrack);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
