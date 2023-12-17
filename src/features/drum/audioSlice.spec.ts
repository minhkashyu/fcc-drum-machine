import audioReducer, {
    AudioState,
    audios,
    setAudio
} from "./audioSlice"

describe("audio reducer", () => {
    const initialState: AudioState = {
        audioId: '',
        audioCode: '',
        audioName: '',
        audioUrl: ''
    }

    it("should handle initial state", () => {
        expect(audioReducer(undefined, {type: "unknown"})).toEqual(initialState)
    })

    it("should handle setAudio", () => {
        const audio = audios[0]
        const actual = audioReducer(initialState, setAudio(audio))
        expect(actual).toEqual(audio)
    })
})
