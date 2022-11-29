const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trackerSchema = new Schema(
  {
    description: { type: String },
    repeition: { type: String },
    duration: { type: String },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Tracker', trackerSchema)
