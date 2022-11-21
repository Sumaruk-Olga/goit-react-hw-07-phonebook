import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts:[],
  filter:'',
};

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {//immer

    addContact(state, action) {
      state.contacts.push(action.payload); 
    },

    deleteContact(state, action){
      state.contacts = state.contacts.filter(contact=>contact.id!==action.payload);
    },

    filterContacts(state, action){
      state.filter = action.payload;
    },

  },
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistContactsReducer = persistReducer(persistConfig, contactsReducer);