import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId: null,
        channelName: null,
        // newMessageId: null,
        deleteMessageOption: false,
    },
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
            // state.newMessageId = action.payload;
            state.deleteMessageOption = action.payload.deleteMessageOption;
        }
    }
});


export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export const selectNewMessageId = (state) => state.app.newMessageId;
export const selectDeleteMessageOption = (state) => state.app.deleteMessageOption;


export default appSlice.reducer;