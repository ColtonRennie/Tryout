import { sendRequest } from '../request'

const BASE_URL = '/api/workout'

// Retrieve an unpaid order for the logged in user
export function getAllWorkouts() {
  return sendRequest(`${BASE_URL}`)
}
export function addWorkout(userData) {
  return sendRequest(BASE_URL, 'POST', userData, 'Invalid Workout')
}
