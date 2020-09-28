import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import axios from 'axios'
//import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  // CLEAR_ERRORS,
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // load user
  const loadUser = () => {
    console.log('load user')
  }

  // register user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': ['application/json'],
      },
    }
    try {
      const res = await axios.post('/api/users', formData, config)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      })
    }
  }
  // login user
  const login = () => {
    console.log('login user')
  }

  // log out
  const logout = () => {
    console.log('logOut ')
  }

  // clear errors
  const clearErrors = () => {
    console.log('clearErrors')
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
