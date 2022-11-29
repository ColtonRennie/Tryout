import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import AuthPage from '../AuthPage/AuthPage'
import MyWorkoutPage from '../MyWorkoutPage/MyWorkoutPage'
import ExercisesPage from '../ExercisesPage/ExercisesPage'
import NavBar from '../../components/NavBar/NavBar'

// Helpers
import { getUser } from '../../utilities/services/users'

import './App.css'

import { workouts } from '../../data'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [workoutList, setWorkoutList] = useState(workouts)

  workoutList.map((workout) => {
    return workout.forEach
  })

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path='/workout'
              element={
                <MyWorkoutPage
                  workout={workoutList}
                  setWorkout={setWorkoutList}
                />
              }
            />
            <Route path='/exercises' element={<ExercisesPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  )
}
