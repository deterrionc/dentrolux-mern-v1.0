import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import admin from './admin'
import appointment from './appointment'
import patient from './patient'

export default combineReducers({
  alert,
  auth,
  admin,
  appointment,
  patient
})
