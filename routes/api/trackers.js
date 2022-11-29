const express = require('express')
const router = express.Router()
const trackerCtrl = require('../../controllers/api/trackers')

router.get('/', trackerCtrl.getAllWorkout)
router.get('/:id', trackerCtrl.getOneWorkout)

router.post('/', trackerCtrl.addWorkout)

router.put('/:id', trackerCtrl.updateWorkout)

router.delete('/:id', trackerCtrl.deleteWorkout)

module.exports = router
