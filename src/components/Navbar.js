import { Icon } from "Icons"
import {useCallback} from "react"
import Navigation from "./Navbar/Navigation";
import User from "./Navbar/User";
import Search from "./Navbar/Navbar/Search";
import {useRouteMatch} from "react-router-dom";
export default function Navbar(){

    const searchRoute = useRouteMatch('/search')

    return (
        <nav className="h-[3.75rem] flex items-center justify-between px-8">
            <Navigation />
            {searchRoute && <Search />}
            <User />
        </nav>
    )
}
