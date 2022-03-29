import {Icon} from "../Icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrent } from "../stores/player";

export default function SongItem({item}) {
    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(function (state){
        return state.player;
    })
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'

            case 'podcast':
                return  'rounded-xl'

            default:
                return 'rounded'
        }
    }
    const isCurrentItem = (current?.id === item.id && playing)

    const updateCurrent = () => {
        if (current.id === item.id){
            if (playing){
                controls.pause()
            }else {
                controls.play()
            }
        }else {
            dispatch(setCurrent(item))
        }
    }
    return (
        <NavLink
            key={item.id}
            to="/"
            className={"relative bg-footer p-4 rounded hover:bg-active group"}
        >
            <div className="pt-[100%] relative mb-4">
                <img src={item.image} className={`absolute inset-0 object-cover w-full h-full rounded ${imageStyle(item)}`} alt={""} />
                <button
                    onClick={updateCurrent}
                    className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
                    <Icon name={isCurrentItem ? 'pause' : 'play'} size={16}/>
                </button>
            </div>
            <span className="block font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                {item.title}
            </span>
            <p className="text-link line-clamp-2 mt-1">
                {item.description}
            </p>
        </NavLink>
    )
}
