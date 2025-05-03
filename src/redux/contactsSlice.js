import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
// export const selectFilteredContacts = ({})  (state) => state.filters.name;
// Селектор повинен залежати від поточних масиву контактів і значення фільтра, та повертати відфільтрований масив контактів.
// Селектор selectFilteredContacts імпортується у компонент списка контактів ContactList.jsx та використовується у useSelector.

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item && item.id !== action.payload
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          addContact.fulfilled,
          deleteContact.fulfilled,
          fetchContacts.fulfilled
        ),
        (state, action) => {
          state.error = null;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state, action) => {
          // state.error = null;
          state.loading = true;
        }
      );
  },
});

export const { dataFulfilledOperation, setLoading, setError } = slice.actions;
export default slice.reducer;
