import {Icon} from "../../../Icons";

export default function Search() {
return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" className="absolute text-black top-2 left-3">
            <Icon size={24} name="search"/>
        </label>
        <input autoFocus={true} type="text" id="search-input" className="h-10 outline-none text-black bg-white rounded-3xl placeholder-black/50 font-medium text-sm w-[22.75rem] pl-12" placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
    </div>
)
}
