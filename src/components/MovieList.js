import React from 'react'
import { useState } from 'react';

const MovieList = ({ items }) => {
    const [list, setList] = useState(items);

    const MovieListItem = ({ item }) => {

        const removeitem = ({ item }) => {
            const newList = list.filter((listitem) => listitem !== item)

            setList(newList);

        }

        return (
            item && <div className='font-sans flex font-bold rounded-xl text-1xl bg-white p-2 mt-4 ml-20 mr-20'>
                <div className='w-52'>{item}</div>
                <button className='text-gray-400 ml-96' onClick={removeitem(item)}>X</button>
            </div>
        )
    }
    return (
        <div className='mt-6 bg-sky-100 w-100 h-96 rounded-xl '>
            <h1 className="text-3xl text-gray-700 font-bold m-3">List:</h1>
            {
                items.map(movie => <MovieListItem key={movie} item={movie} />)
            }
            {
                console.log(items)
            }


        </div>
    )
}

export default MovieList