import {NavLink} from "react-router-dom";
import {Icon} from "../Icons";
import SongItem from "./songItem";
import Title from "./Title";

export default function BoxContent({ title, more = false, items }) {



    return (
        <>
            <Title title={title} more={more} />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6">
                {items.map(item => (
                    <SongItem item={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}
