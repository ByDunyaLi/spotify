
export default function Playlists() {
    return (
        <nav className="hide-scroll mx-6 mt-2 py-2 border-t border-white border-opacity-20 flex-auto overflow-auto">
            <ul>
                {new Array(40).fill(
                    <li>
                        <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                            Playlist
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}
