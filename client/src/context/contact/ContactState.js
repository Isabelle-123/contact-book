import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'

import {
  // GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  //CLEAR_FILTER,
  // SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_CONTACTS,
  // CLEAR_FILTER,
  // CONTACT_ERROR,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'ann',
        email: 'a@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: '2',
        name: 'bea',
        email: 'b@gmail.com',
        phone: '123',
        type: 'personal',
      },
      {
        id: '3',
        name: 'cat',
        email: 'c@gmail.com',
        phone: '123',
        type: 'professional',
      },
    ],
    current: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //Add contact
  const addContact = (contact) => {
    contact.id = uuidv4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  //set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  //update contact

  //filter contacts

  //clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
