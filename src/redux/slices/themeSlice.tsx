import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState = {
    theme: 'light',
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions

export const getTheme = state => state.theme.theme

export default themeSlice.reducer