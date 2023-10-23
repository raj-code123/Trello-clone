import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
    arrayUnion,
    doc,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "../../firebse";


// Define the initial state
const initialState = {
    lists: [],
    status: 'idle',
    error: null,
  };

  // Define an async thunk for adding a card
  export const addCardAsync = createAsyncThunk('list/addCard', async ({ title, listId }) => {
    if (!title) {
        return;
      }
      const newCardId = uuid();
      const newCard = {
        id: newCardId,
        title,
      };
      const listRef = doc(db, "lists", listId);
  
      await updateDoc(listRef, {
        cards: arrayUnion(newCard),
      });
  });

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(addCardAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addCardAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const list = state.lists.find((list) => list.id === action.payload.listId);
            list.cards.push(action.payload);
            console.log(action.payload);
          })
          .addCase(addCardAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})


export default listSlice.reducer;

export const listReducers = listSlice.reducer;
export const listSelector = (state) => state.listReducers;