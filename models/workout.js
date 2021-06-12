const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: Array,
  // The array contains the following information and should be validated on the front end:
  // workoutType: String,
  // name: String,
  // duration: Number,

  // //Cardio
  // distance: Number,

  // // Resistance
  // weight: Number,
  // sets: Number,
  // reps: Number,
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
