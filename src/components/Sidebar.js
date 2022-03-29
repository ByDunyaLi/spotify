import logo from "../img/logo.svg"
import Menu from "./Sidebar/Menu"
import { Icon } from "../Icons";
import Playlists from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import SidebarCover from "./Sidebar/SidebarCover";
import {useSelector} from "react-redux";

export default function Sidebar(){

    const sidebar =useSelector(state => state.player.sidebar)

    return (
        <div className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
            <a href="/" className="mb-7 px-6">
                <img src={logo} className="h-10" />
            </a>
            <Menu />

            <nav className="mt-6">
                <ul>
                    <li className="space-y-2">
                        <a href="" className="flex py-2 px-6 text-sm items-center group text-link font-semibold hover:text-white transition-all duration-400">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-opacity-60 bg-white group-hover:bg-opacity-100 rounded-sm text-black transition-all duration-400">
                                <Icon name="playlistIcon" size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex py-2 px-6 text-sm items-center group text-link font-semibold hover:text-white transition-all duration-400 items-center">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm bg-gradient-to-tl from-[#c4efd9] to-[#450af5] transition-all duration-400 delay-0 items-center">
                                <Icon name="heart" size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlists />
            <DownloadApp />

            {sidebar && <SidebarCover />}

        </div>
    )
}

