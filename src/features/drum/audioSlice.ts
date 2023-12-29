import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface AudioState {
  audioId: string
  audioCode: string
  audioName: string
  audioUrl: string
}

const initialState: AudioState = {
  audioId: "",
  audioCode: "",
  audioName: "",
  audioUrl: "",
}

export const audios = [
  {
    audioId: "Q",
    audioCode: "Heater-1",
    audioName: "Heater 1",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    audioId: "W",
    audioCode: "Heater-2",
    audioName: "Heater 2",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    audioId: "E",
    audioCode: "Heater-3",
    audioName: "Heater 3",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    audioId: "A",
    audioCode: "Heater-4",
    audioName: "Heater 4",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    audioId: "S",
    audioCode: "Clap",
    audioName: "Clap",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    audioId: "D",
    audioCode: "Open-HH",
    audioName: "Open-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    audioId: "Z",
    audioCode: "Kick-n'-Hat",
    audioName: "Kick-n'-Hat",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    audioId: "X",
    audioCode: "Kick",
    audioName: "Kick",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    audioId: "C",
    audioCode: "Closed-HH",
    audioName: "Closed-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
]

export const findAudio = (audioId: string) => {
  return audios.find((audio) => audio.audioId === audioId.toUpperCase())
}

export const playAudio = (audioId: string) => {
  const elAudio = document.getElementById(audioId.toUpperCase())
  if (elAudio) {
    // @ts-ignore
    elAudio.play()
  }
}

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAudio: (state, action: PayloadAction<AudioState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return Object.assign({}, action.payload)
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
})

export const { setAudio } = audioSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getAudio = (state: RootState) => state.audio

export default audioSlice.reducer
