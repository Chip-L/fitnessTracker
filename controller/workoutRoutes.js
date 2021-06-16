const router = require("express").Router();
const Workout = require("../models/workout");

// getLastWorkout
router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// createWorkout (sets date and creates the array - does not add data to the array)
router.post("/", (req, res) => {
  Workout.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// AddExercise (this adds data to an existing workout populating the array)
router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/range", (req, res) => {
  Workout.aggregate()
    .addFields({ totalDuration: { $sum: "$exercises.duration" } })
    .sort({ day: -1 })
    .limit(7)
    .then((data) => {
      console.log("\n\nrange data:", data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
