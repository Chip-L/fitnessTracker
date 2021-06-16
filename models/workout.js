const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      // The array contains the following information and should be validated on the front end:
      _id: false,
      type: {
        type: String,
        required: "Please enter workout type",
      },
      name: {
        type: String,
        required: "Please enter workout name",
      },
      duration: {
        type: Number,
        required: "Please enter duration",
      },

      //Cardio
      distance: Number,

      // Resistance
      weight: Number,
      sets: Number,
      reps: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
