import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
//import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    loading: true,
    error: null,
    user: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // load user

  // register user

  // login user

  // log out

  // clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenicated: state.isAuthenicated,
        user: state.user,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
