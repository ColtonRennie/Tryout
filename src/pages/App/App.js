import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import AuthPage from '../AuthPage/AuthPage'
import MyWorkoutPage from '../MyWorkoutPage/MyWorkoutPage'
import ExercisesPage from '../ExercisesPage/ExercisesPage'
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage'

import NavBar from '../../components/NavBar/NavBar'

// Helpers
import { getUser } from '../../utilities/services/users'

import './App.css'

import MyWorkoutDetailPage from '../MyWorkoutDetailPage/MyWorkoutDetailPage'
import { useEffect } from 'react'
import { getAllWorkouts } from '../../utilities/api/workouts'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [workoutList, setWorkoutList] = useState([])

  useEffect(() => {
    async function loadWorkouts() {
      //get the workouts from the server and update state
      const data = await getAllWorkouts()
      setWorkoutList(data)
    }
    loadWorkouts()
  }, [])

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path='/workout'
              exact
              element={
                <MyWorkoutPage
                  workoutList={workoutList}
                  setWorkout={setWorkoutList}
                />
              }
            />
            <Route
              path='workout/new'
              element={<NewWorkoutPage setWorkout={setWorkoutList} />}
            ></Route>
            <Route
              path='workout/:workoutId'
              element={<MyWorkoutDetailPage />}
            ></Route>
            <Route path='/exercises' element={<ExercisesPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  )
}
