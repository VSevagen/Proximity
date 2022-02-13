import { createSlice } from '@reduxjs/toolkit';

export const Language = createSlice({
  name: 'lang',
  initialState: {
    value: "EN"
  },
  reducers: {
    changeLang: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeLang } = Language.actions

export default Language.reducer