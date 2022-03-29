import { Menu } from '@headlessui/react'
import { Icon } from "../../Icons";

export default function User() {

    const user = {
        name: 'wertyus45',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
    return (
        <div>
            <Menu as="nav" className={"relative"}>
                {({ open})=> (
                    <>
                        <Menu.Button className={`h-8 flex pr-2 rounded-3xl gap-x-2 ${open ? 'bg-active' : 'bg-black' } items-center hover:bg-active`}>
                            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mx-0.5 my-1.5"} />
                            <span className="text-sm font-bold items-center">{user.name}</span>
                            <span className={open && 'rotate-180'}>
                                <Icon size={16} name="downDir"/>
                            </span>
                        </Menu.Button>
                        <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2 flex flex-col justify-start items-start"}>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`h-10 w-[184px] flex items-center justify-between px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        href="#"
                                    >
                                        Account
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`h-10 w-[184px] flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        href="#"
                                    >
                                        Profile
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`h-10 w-[184px] flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        href="#"
                                    >
                                        Settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`h-10 w-[184px] flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        href="#"
                                    >
                                        Log out
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items></>
                )}
            </Menu>
        </div>
    )
}
