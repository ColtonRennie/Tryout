import { Link } from 'react-router-dom'

export default function TrackerCard({ workout }) {
  console.log(workout.id)
  return (
    <Link to={`/workout/${workout.id}`}>
      <div className='workoutCard'>
        <div className='card-body'>
          <h5 className='card-text'>{workout.description}</h5>
          <h6 className='card-text'>{workout.repeition}</h6>
          <h6 className='card-text'>{workout.duration}</h6>
          <h6 className='card-text'>{workout.date}</h6>
        </div>
      </div>
    </Link>
  )
}
