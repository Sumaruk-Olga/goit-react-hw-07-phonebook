import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteTask, addContact } from "./operations";

const initialState = {
  contacts:[],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: {

    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.error = null;      
      state.contacts=[...action.payload];
    },
    [fetchContacts.rejected]:handleRejected,


    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled] (state, action) {
      state.error = null;
      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteTask.rejected]:handleRejected,


    [addContact.pending]: handlePending,
    [addContact.fulfilled] (state, action) {
      state.error = null;
      console.log('payload', action.payload);
      state.contacts.push(action.payload);
    },
    [addContact.rejected]:handleRejected,
    },
  
});

export const contactsReducer = contactsSlice.reducer;


