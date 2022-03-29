const HomeIcon = ({size}) => {
    return(
        <svg height={size} width={size} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"/>
        </svg>
    )
}
const SearchIcon = ({size}) => {
    return(
        <svg height={size} width={size} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
        </svg>
    )
}
const LibraryIcon = ({size}) => {
    return(
        <svg height={size} width={size} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"/>
        </svg>
    )
}
const PlaylistIcon = ({size}) => {
    return(
        <svg height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor"
                d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z" />
        </svg>
    )
}
const HeartIcon = ({size}) => {
    return(
        <svg height={size} width={size} viewBox="0 0 16 16">
            <path fill="currentColor"
                d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z" />
        </svg>
    )
}
const DownloadIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size} viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" />
            <path fill="currentColor"
                d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z" />
        </svg>
    )
}
const BackArrowIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z" />
        </svg>
    )
}
const PlayIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
        </svg>
    )
}

const ArrowUpIcon = ({size}) => {
    return(
        <svg height="16" role="img" width="24" viewBox="0 0 24 24">
            <polygon fill="currentColor" points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 " />
        </svg>
    )
}
const PauseIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill="currentColor"
                d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z" />
        </svg>
    )
}
const PreviousIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z" />
        </svg>
    )
}
const ForwardIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z" />
        </svg>
    )
}
const BackFifteenIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path
                d="M2.464 4.5h1.473a.75.75 0 110 1.5H0V2.063a.75.75 0 011.5 0v1.27a8.25 8.25 0 1110.539 12.554.75.75 0 01-.828-1.25A6.75 6.75 0 102.464 4.5z" />
            <path
                d="M.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H0v-1.5h.303zm4.832-.911h4.05v1.5H6.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924C9.843 14.5 8.51 15.8 6.89 15.8a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z" />
        </svg>
    )
}
const QueueIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path
                d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z" />
            </svg>
    )
}
const ConnectIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path
                d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z" />
            </svg>
    )
}
const VolumeLowIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path
                d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z" />
            </svg>
    )
}
const VolumeMediumIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z" />            </svg>
    )
}
const VolumeFullIcon = ({size}) => {
    return(
        <svg role="presentation" height="16" width="16" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16"
             className="Svg-sc-1bi12j5-0 hDgDGI" fill="currentColor">
            <path
                d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z" />
            <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z" />
        </svg>
    )
}
const VolumeMuteIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z" />
            <path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" />
        </svg>
    )
}
const NextFifteenIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path
                d="M13.536 4.5h-1.473a.75.75 0 100 1.5H16V2.063a.75.75 0 00-1.5 0v1.27A8.25 8.25 0 103.962 15.887a.75.75 0 10.827-1.25A6.75 6.75 0 1113.535 4.5z" />
            <path
                d="M6.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H6v-1.5h.303zm4.832-.911h4.05v1.5H12.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924 0 1.624-1.333 2.923-2.954 2.923a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z" />
        </svg>
    )
}
const PictureInPictureIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill-rule="nonzero" />
            <path d="M10 8h4v3h-4z" />
        </svg>
    )
}
const PlusIcon = ({size}) => {
    return(
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" />
            <path d="M11.75 8a.75.75 0 01-.75.75H8.75V11a.75.75 0 01-1.5 0V8.75H5a.75.75 0 010-1.5h2.25V5a.75.75 0 011.5 0v2.25H11a.75.75 0 01.75.75z" />
        </svg>
    )
}
const ForwardArrowIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z" />
        </svg>
    )
}
const DownDirIcon = ({size}) => {
    return(
        <svg role="img" height={size} width={size}
             viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 6l-6 6-6-6h12z" />
        </svg>
    )
}
const ProfileIcon = ({size}) => {
    return(
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon"><path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z" />
        </svg>
    )
}

const Icon = ({name, size = 24}) => {
    const icons = {
        home: HomeIcon,
        search: SearchIcon,
        library: LibraryIcon,
        playlistIcon: PlaylistIcon,
        heart: HeartIcon,
        download: DownloadIcon,
        backArrow: BackArrowIcon,
        forwardArrow: ForwardArrowIcon,
        profile: ProfileIcon,
        downDir: DownDirIcon,
        play: PlayIcon,
        pause: PauseIcon,
        previous: PreviousIcon,
        forward: ForwardIcon,
        backFifteen: BackFifteenIcon,
        nextFifteen: NextFifteenIcon,
        queue: QueueIcon,
        connect: ConnectIcon,
        volumeLow: VolumeLowIcon,
        volumeMedium: VolumeMediumIcon,
        volumeFull: VolumeFullIcon,
        pictureInPicture: PictureInPictureIcon,
        plus: PlusIcon,
        volumeMute: VolumeMuteIcon,
        arrowUp: ArrowUpIcon,
    }
    const Component = icons[name]
    return <Component size={size}/>
}

export {
    Icon
}
