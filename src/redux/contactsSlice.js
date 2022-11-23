import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteTask, addContact } from "./operations";

const initialState = {
  items:[],
  isLoading: false,
  error: null
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
      state.items=[...action.payload];
      state.isLoading = false;
    },
    [fetchContacts.rejected]:handleRejected,


    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled] (state, action) {
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
    },
    [deleteTask.rejected]:handleRejected,


    [addContact.pending]: handlePending,
    [addContact.fulfilled] (state, action) {
      state.error = null;
      // console.log('payload', action.payload);
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]:handleRejected,
    },
  
});

export const contactsReducer = contactsSlice.reducer;


