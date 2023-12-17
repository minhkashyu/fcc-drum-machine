import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import audioReducer from "../features/drum/audioSlice"

export const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
