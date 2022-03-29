import {Icon} from "../../Icons"
import { NavLink } from "react-router-dom";

export default function Menu(){
    return (
        <nav className="px-2">
           <ul className="flex flex-col">
               <li>
                   <NavLink activeClassName="bg-active text-white" exact to={"/"} className="h-10 flex space-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                       <span>
                           <Icon name="home"/>
                       </span>
                       <span>Ana Sayfa</span>
                   </NavLink>
               </li>
               <li>
                   <NavLink activeClassName="bg-active text-white" to={"/search"} className="h-10 flex space-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                       <span>
                           <Icon name="search"/>
                       </span>
                       <span>Ara</span>
                   </NavLink>
               </li>
               <li>
                   <NavLink activeClassName="bg-active text-white" to={"/library"} className="h-10 flex space-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <Icon name="library"/>
                        </span>
                       <span>Kitaplığın</span>
                   </NavLink>
               </li>
           </ul>
        </nav>
    )
}
