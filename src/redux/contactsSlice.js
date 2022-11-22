import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

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

  },
  
});

// export const { getContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


