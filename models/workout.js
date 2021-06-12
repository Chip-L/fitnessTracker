const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // in both sets
  workoutType: {
    type: String,
    validate: [
      function (v) {
        return v === "cardio" || v === "resistance";
      },
      "Workout Type must be either 'cardio' or 'resistance'.",
    ],
  },
  name: String,
  duration: Number,

  //Cardio
  distance: Number,

  // Resistance
  weight: Number,
  sets: Number,
  reps: Number,
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
