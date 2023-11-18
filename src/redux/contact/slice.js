import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/operations/contactOperations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContact.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [...state, ...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [deleteContact.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload.id),
        ],
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const contactsReducer = contactSlice.reducer;
