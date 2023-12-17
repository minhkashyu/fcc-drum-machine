import React, {useEffect} from 'react'
import {useAppDispatch} from "../../app/hooks"
import {audios, findAudio, playAudio, setAudio} from './audioSlice'
import {DrumPad} from './DrumPad'

function PadBank(props: any) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        function handleKeyDown(e: any) {
            const audio = findAudio(e.key)

            if (audio) {
                playAudio(e.key)

                dispatch(setAudio(audio))
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="pad-bank">
            <div className="row g-1 row-cols-1 row-cols-md-3">
                {
                    audios.map((audio: any, index: any) => {
                        return (
                            <DrumPad audio={audio} key={index} index={index} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PadBank;
