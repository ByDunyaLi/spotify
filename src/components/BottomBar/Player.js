import {Icon} from "../../Icons";
import {useAudio, useFullscreen, useToggle} from 'react-use';
import secondsToTime from "utils"
import CustomRange from "../CustomRange"
import {useEffect, useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setControls, setPlaying} from "../../stores/player";
import { setSidebar } from "../../stores/player";


export default function Player() {

    const fsRef = useRef()
    const [show, toggle] = useToggle(false)
    const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)})
    const dispatch = useDispatch()
    const {current, sidebar} = useSelector(state => state.player)
    const [audio, state, controls, ref] = useAudio({
        src: current.src,
        autoPlay: true,
    })

    useEffect(() => {
        dispatch(setControls(controls))
    },[])

    useEffect(() => {
        controls.play()
    },[current])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    },[state.playing])

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMute'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if (state.volume > 0.33 && state.volume < 0.66)
            return 'volumeMedium'
            return 'volumeFull'
    },[state.volume, state.muted])

    return (
        <div className="flex px-4 justify-between items-center h-full">
            <div className="min-w-[11.25rem] w-[30%]">
                {current &&
                <div className="flex items-center mr-3">
                    {!sidebar && (
                        <div className="relative w-14 h-14 mr-3 group flex-shrink-0">
                            <img src={current.image} alt=""/>
                            <button
                                onClick={() => dispatch(setSidebar(true))}
                                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black rotate-90 opacity-0 hover:!opacity-100 hover:scale-[1.06] group-hover:opacity-80 bg-opacity-80 items-center justify-center flex">
                                <Icon size={16} name="arrowUp" />
                            </button>
                        </div>
                    )}
                    <div>
                        <h6 className="text-sm line-clamp-1">{current.title}</h6>
                    </div>
                    <div className="flex items-center">
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name="plus" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name="pictureInPicture" />
                        </button>
                    </div>
                </div>
                }
            </div>
            <div className="flex flex-col items-center px-4 max-w-[45,125rem] w-[40%]">
                <div className="flex items-center gap-x-2">
                    <button onClick={() => controls.seek(state.time - 15)} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="backFifteen" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="previous"/>
                    </button>
                    <button onClick={controls[state?.playing ? `pause` : `play`]} className="w-8 h-8 flex items-center justify-center text-black hover:scale-[1.06] bg-white rounded-full">
                        <Icon size={16} name={state?.playing ? `pause` : `play`} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="forward" />
                    </button>
                    <button onClick={() => controls.seek(state.time + 15)} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="nextFifteen" />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex justify-end">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="queue"/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <Icon size={16} name="connect"/>
            </button>
                <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon}/>
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}
