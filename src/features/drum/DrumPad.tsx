import React from "react"

import { useAppDispatch } from "../../app/hooks"
import { playAudio, setAudio } from "./audioSlice"

export function DrumPad(props: any) {
  const dispatch = useAppDispatch()
  const arrBtnColours = [
    "btn-primary",
    "btn-secondary",
    "btn-danger",
    "btn-secondary",
    "btn-success",
    "btn-secondary",
    "btn-warning",
    "btn-secondary",
    "btn-info",
  ]

  return (
    <div className="col">
      <button
        className={
          "drum-pad btn w-100 h-100 text-center " +
          (arrBtnColours[props.index] || "")
        }
        id={props.audio.audioCode}
        onClick={() => {
          playAudio(props.audio.audioId)

          dispatch(setAudio(props.audio))
        }}
      >
        <audio
          className="clip"
          id={props.audio.audioId}
          src={props.audio.audioUrl}
        ></audio>
        {props.audio.audioId}
      </button>
    </div>
  )
}
