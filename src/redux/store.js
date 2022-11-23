import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isLoading: false,
    error: null
  },
});


// {
//   contacts: [
//     items: [],
    // isLoading: false,
    // error: null
//   ],
//   filter: ""
// }