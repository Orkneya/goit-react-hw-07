import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});
