import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'a',
        email: 'a@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: '2',
        name: 'b',
        email: 'b@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: '3',
        name: 'c',
        email: 'c@gmail.com',
        phone: '123',
        type: 'personal',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //Add contact

  //delete contact

  //set current contact

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

export default ContactState
