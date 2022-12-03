const Tracker = require('../../models/tracker')

module.exports = {
  getAllWorkout,
  addWorkout,
  updateWorkout,
  deleteWorkout,
  getOneWorkout,
}

//Get All
async function getAllWorkout(req, res) {
  const workouts = await Tracker.find()
  res.json(workouts)
}

// Get One
async function getOneWorkout(req, res) {
  const workout = await Tracker.findById(req.params._id)
  res.json(workout)
}

//Add
async function addWorkout(req, res) {
  if (!req.body.text) {
    res.status(400)
    res.send('Please add a description')
  }
  const workout = await Tracker.create(req.body)
  res.status(200).json(workout)
}

//Edit
async function updateWorkout(req, res) {
  const workout = await Tracker.findById(req.params.id)

  if (!workout) {
    res.status(400)
    res.send('Workout not found')
  }
  const updatedWorkout = await Tracker.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedWorkout)
}

//Delete
async function deleteWorkout(req, res) {
  const workout = await Tracker.findById(req.params.id)

  if (!workout) {
    res.status(400)
    res.send('Workout not found')
  }
  await workout.remove()

  res.status(200).json({ id: req.params })

  // Tracker.deleteOne({ _id: req.params.id }).then(function (err, workout) {
  //   res.status(200).json(workout)
  // })
}
