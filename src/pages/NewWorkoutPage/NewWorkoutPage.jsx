import { useState } from 'react'
import { addWorkout } from '../../utilities/api/workouts'

const defaultState = {
  description: '',
  repeition: '',
  duration: '',
  date: '',
}

export default function NewWorkoutPage({ setWorkoutList }) {
  const [formData, setFormData] = useState(defaultState)

  const { description, repeition, duration } = formData

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { description, repeition, duration } = formData
      const data = { description, repeition, duration }

      const workout = await addWorkout(data)

      setWorkoutList = workout
      console.log(workout)
    } catch (err) {
      setFormData({
        ...formData,
        error: 'Creating a workout failed - Try again!',
      })
    }
  }

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    }
    setFormData(newFormData)
  }

  return (
    <div className='AddNewWorkout'>
      <div className='form-container'>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={handleChange}
          />
          <label htmlFor='repeition'>Repeition</label>
          <input
            type='text'
            name='repeition'
            id='repeition'
            value={repeition}
            onChange={handleChange}
          />
          <label htmlFor='duration'>Duration</label>
          <input
            type='text'
            name='duration'
            id='duration'
            value={duration}
            onChange={handleChange}
          />
          <button type='submit'>Add New Workout</button>
        </form>
      </div>
    </div>
  )
}
