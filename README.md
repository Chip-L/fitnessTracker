# Fitness Tracker

## Description

Create a fitness tracker application so that the consumers can more easily reach their fitness goals.

This was an exercise of using routes to create a Mongo DB site. We had to create the server, the models and the routes needed to run the front end application that was provided to us.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)

## User Story

As a user,

- I want to be able to view create and track daily workouts.
- I want to be able to log multiple exercises in a workout on a given day.
- If the exercise is a resistance exercise,
  - I should also be able to track the name, type, weight, sets, reps, and duration of exercise
- If the exercise is a cardio exercise,
  - I should be able to track the name, type, duration and distance traveled.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

- Add exercises to the most recent workout plan.

- Add new exercises to a new workout plan.

- View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

- View the total duration of each workout from the past seven workouts on the `stats` page.

## Usage

### If Local:

- npm start to start the server.
- navigate to http://localhost:3000/

### From Heroku:

- navigate to https://fierce-earth-65781.herokuapp.com/

## Technologies

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Credits

Study Group:

- Lauren Gabaldon
- Josh Lee
- Jared Sutch
- Lacey Pape
- Alex Jurgs
- Tarik Maggio
