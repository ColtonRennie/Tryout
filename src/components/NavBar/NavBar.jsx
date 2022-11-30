import { Link } from 'react-router-dom'
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Tryout
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link to='/workout' className='nav-link'>
              Tracker
            </Link>
            <Link to='/exercises' className='nav-link'>
              Exercises
            </Link>
            <Link to='' className='nav-link' onClick={handleLogOut}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// <nav>
//   <Link to='/workout'>Tracker</Link>
//   &nbsp; | &nbsp;
//   <Link to='/exercises'>Exercises</Link>
//   &nbsp; &nbsp; <span className='name'>Hey there {user.name}!</span>
//   &nbsp; &nbsp;{' '}
//   <Link to='' onClick={handleLogOut}>
//     Log Out
//   </Link>
// </nav>
