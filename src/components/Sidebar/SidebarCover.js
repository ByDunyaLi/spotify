import {useDispatch, useSelector} from "react-redux";
import {setSidebar} from "../../stores/player";
import {Icon} from "../../Icons";

export default function SidebarCover() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)

    return (
        <div className="pt-[100%] relative bg-white group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
            <button
                onClick={() => dispatch(setSidebar(false))}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black -rotate-90 opacity-0 hover:!opacity-100 hover:scale-[1.06] group-hover:opacity-80 bg-opacity-80 items-center justify-center flex">
                <Icon size={16} name="arrowUp" />
            </button>
        </div>
    )
}
