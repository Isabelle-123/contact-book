import React, { Fragment, useContext, useEffect } from 'react'
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import ContactItem from './ContactItem';
//import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext

  return (
    <>
      {contacts.map((contact) => (
        <h3>{contact.name}</h3>
      ))}
    </>
  )
}

export default Contacts
