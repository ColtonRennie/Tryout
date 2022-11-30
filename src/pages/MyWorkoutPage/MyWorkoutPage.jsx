import TrackerCard from '../../components/TrackerCard/TrackerCard'
import React from 'react'
import './MyWorkoutPage.css'

export default function myWorkoutPage({ workoutList }) {
  return (
    <main className='MyWorkoutPage '>
      <h1>
        My Workout Page <button>Add Workout</button>
      </h1>
      <div className='flex-container table table-dark'>
        {workoutList.map((workout, idx) => (
          <TrackerCard key={idx} index={idx} workout={workout} />
        ))}
      </div>
    </main>
  )
}
