import { createSlice } from '@reduxjs/toolkit';

export const deleteMessageSlice = createSlice({
    name: 'deleteMessage',
    initialState: {
        deleteMessageOption: false,
    },
    reducers: {
        setDeleteMessageOption: (state, action) => {
            state.deleteMessageOption = action.payload.deleteMessageOption;
        }
    }
});


export const { setDeleteMessageOption } = deleteMessageSlice.actions;


export const selectDeleteMessageOption = (state) => state.deleteMessage.deleteMessageOption;


export default deleteMessageSlice.reducer;