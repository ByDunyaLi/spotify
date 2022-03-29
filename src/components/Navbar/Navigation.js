import { Icon } from "Icons"
import { useHistory } from "react-router-dom";

export default function Navigation(){
const history = useHistory()

    return (
        <nav className="flex gap-x-4">
            <button onClick={() => history.goBack()} className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] hover:bg-black">
                <Icon name="backArrow"/>
            </button>
            <button onClick={() => history.goForward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] hover:bg-black">
                <Icon name="forwardArrow"/>
            </button>
        </nav>
    )
}
