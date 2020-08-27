import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
  SET_CURRENT,
  DELETE_CURRENT,
} from '../types'

// ADD_CONTACT,
// DELETE_CONTACT,
// UPDATE_CONTACT,
// FILTER_CONTACTS,
// CLEAR_FILTER,
// SET_ALERT,
// REMOVE_ALERT,
// SET_CURRENT,
// DELETE_CURRENT,

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'A',
        email: 'a@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: 1,
        name: 'B',
        email: 'b@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: 1,
        name: 'C',
        email: 'c@gmail.com',
        phone: '123',
        type: 'personal',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, intialState)

  // add contact

  //delete contact

  // set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContext
