import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MyWorkoutDetailPage({
  workouts,
  reloadWorkouts,
  setWorkouts,
}) {
  useEffect(() => {
    if (!workouts) {
      window.location.pathname = '/workouts'
    }
  }, [])
  const workoutParams = useParams()

  const currentWorkout = workouts.filter((workout) => {
    return workout._id == workoutParams.workoutId
  })

  const [editable, setEditable] = useState(false)

  function initiateEdit(e) {
    document.querySelectorAll('.edit-fields').forEach((el) => {
      el.setAttribute('contenteditable', 'true')
      el.style.border = '1px solid black'
    })

    setEditable(true)
  }

  async function save() {
    //send edit request
    // fetch(BASE_URL + 'workout/' + currentWorkout[0]._id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({}),
    // })
    // document.querySelectorAll('.edit-fields').forEach((el) => {
    //   el.setAttribute('contenteditable', 'false')
    //   el.style.border = 'none'
    // })
    // setEditable(false)
  }

  async function deleteid() {
    // await delete request
    // fetch(BASE_URL + 'workout/' + currentWorkout[0]._id, {
    //   method: 'Delete',
    // })
  }

  return (
    <main className='MyWorkoutDetailPage'>
      <h2>
        <span className='edit-fields' onChange={(e) => console.log(e)}>
          {currentWorkout[0]?.description}
        </span>
      </h2>

      <div className='row'>
        <div className='workout-poster col'></div>
        <div className='workout-info col'>
          <p>
            <strong>Repeition : </strong>
            <span className='edit-fields'>{currentWorkout[0]?.repeition}</span>
          </p>
          <p>
            <strong>Duration : </strong>
            <span className='edit-fields'>{currentWorkout[0]?.duration}</span>
          </p>
          <p>
            <strong>Date : </strong>
            <span className='edit-fields'>{currentWorkout[0]?.date}</span>
          </p>
          {editable ? (
            <button onClick={save}>save</button>
          ) : (
            <button onClick={initiateEdit}>Edit</button>
          )}
          <button onClick={deleteid}>Delete</button>
        </div>
      </div>
    </main>
  )
}
