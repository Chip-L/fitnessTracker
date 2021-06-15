const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./workoutRoutes");

router.use("/", homeRoutes);
router.use("/api/workouts", apiRoutes);

module.exports = router;
