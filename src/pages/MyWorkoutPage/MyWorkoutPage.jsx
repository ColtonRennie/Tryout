import TrackerCard from '../../components/TrackerCard/TrackerCard'
import React from 'react'

export default function myWorkoutPage({ workoutList }) {
  return (
    <main className='MyWorkoutPage'>
      <h1>My Workout Page</h1>
      <div className='flex-container'>
        {workoutList.map((workout, idx) => (
          <TrackerCard key={idx} index={idx} workout={workout} />
        ))}
      </div>
    </main>
  )
}
