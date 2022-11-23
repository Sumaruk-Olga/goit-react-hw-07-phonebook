import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteTask } from "./operations";

const initialState = {
  contacts:[],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: {

    [fetchContacts.pending](state) {
      // state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      // state.isLoading = false;
      // state.error = null;      
      state.contacts=[...action.payload];
    },
    [fetchContacts.rejected](state, action) {
      // state.isLoading = false;
      // state.error = action.payload;
    },

    [deleteTask.fulfilled] (state, action) {
      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(index, 1);
  },



  },
  
});

export const contactsReducer = contactsSlice.reducer;


