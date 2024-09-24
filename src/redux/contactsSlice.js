import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps';
import { selectFilter } from './filtersSlice';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (buider) => {
    buider
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

// export const selectFilteredContacts  = (state) => {
//   const contacts = selectContacts(state);

//   console.log("change" + Date.now());

//   return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
// }

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log('change' + Date.now());

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default slice.reducer;
