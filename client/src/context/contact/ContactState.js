import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        _id: 1,
        name: 'Tom Jonhson',
        email: 'tom@gmail.com',
        phone: '111-111-1111',
        info: ''
      },
      {
        type: 'professional',
        _id: 2,
        name: 'Ted Jonhson',
        email: 'ted@gmail.com',
        phone: '222-222-2222',
        info: ''
      },
      {
        type: 'professional',
        _id: 3,
        name: 'Sara Smith',
        email: 'smith.gmail.com',
        phone: '111-111-1111',
        info: ''
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
