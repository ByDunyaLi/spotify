import categories from "../Data/categories";
import {color} from "tailwindcss/lib/util/dataTypes";
import Title from "../components/Title";
import Favorite from "../Data/Favorite-Catagories";
import ScrollContainer from 'react-indiana-drag-scroll'
import {useEffect, useRef, useState} from "react";
import {Icon} from "../Icons";
import Category from "../components/CategoryItem"
import WideCategory from "../components/WideCategory"





export default function Search(){

    const favoritesRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (favoritesRef.current) {
            const scrollHandle = () =>{
                const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
                const isBegin = favoritesRef.current.scrollLeft === 0
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            favoritesRef?.current?.addEventListener('scroll', scrollHandle)

            return () => {
                favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
            }
        }
    }, [favoritesRef])

    const slideFavoritesNext = () => {
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 275
    }
    const slideFavoritesPrev = () => {
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 275
    }

    return(
        <>
            <section className="mb-8">
                <Title title={"Your top genres"}/>
                <div className="relative">
                    {prev && <button className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesPrev}>
                        <Icon name={"backArrow"} size={24} />
                    </button>}
                    {next && <button className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesNext}>
                        <Icon name={"forwardArrow"} size={24} />
                    </button>}
                    <ScrollContainer className="flex overflow-x gap-x-6 scroll-smooth"
                                     innerRef={favoritesRef}>
                        {Favorite.map((category,index) => <WideCategory key={index} category={category}/>)}
                    </ScrollContainer>
                </div>
            </section>
           <section>
               <Title title={"Browse all"}/>
               <div className="grid grid-cols-8 gap-6">
                   {categories.map((category,index) => <Category key={category.index} category={category}/>)}
               </div>
           </section>
        </>
    )
}
