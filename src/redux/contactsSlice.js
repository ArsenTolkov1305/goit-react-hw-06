import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-37" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [...initialContacts], // Початкові контакти додаються до стану
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// Повертаємо всі контакти зі стану
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
