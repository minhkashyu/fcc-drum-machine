import React from "react"
import {useAppSelector} from "../../app/hooks"
import { getAudio } from "./audioSlice"

function Display(props: any) {
    const audio = useAppSelector(getAudio)
    return (
        <p id="display" className="mb-0">{audio.audioName}</p>
    );
}

export default Display;
