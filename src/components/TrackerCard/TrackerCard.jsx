import { Link } from 'react-router-dom'

export default function TrackerCard({ workout }) {
  return (
    <Link to={`/workout/${workout.description}`}>
      <div className='workoutCard'>
        <div className='card-body'>
          <h6 className='card-text'>{workout.repeition}</h6>
          <h6 className='card-text'>{workout.duration}</h6>
        </div>
      </div>
    </Link>
  )
}
