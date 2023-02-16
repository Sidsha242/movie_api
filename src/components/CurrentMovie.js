import { DIREC_API_URL, movieDirectoroptions } from '../api.js'
import { useState, useEffect } from 'react';
import './CurrentMovie.css';
const CurrentMovie = ({ data, setmovieList, movieList }) => {

    const id = data.movie.id
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState([]);



    useEffect(() => {
        fetch(
            `${DIREC_API_URL}get-full-credits?tconst=${id}`, movieDirectoroptions)
            .then(response => response.json())
            .then(response => {
                // console.log(response.crew.director[0].name);
                setDirector(response.crew.director[0].name);
            })
            .catch(err => console.error(err));


        fetch(`${DIREC_API_URL}get-overview-details?tconst=${id}&currentCountry=US`, movieDirectoroptions)
            .then(response => response.json())
            .then(response => {
                setGenre(response.genres);
            })
            .catch(err => console.error(err));

    }, []);


    const addMovie = (newMovie) => {

        setmovieList([...movieList, newMovie])
        // console.log(movieList);

    }

    const MovieListItem = (movie) => {
        return (
            <div className='font-sans rounded-xl text-1xl bg-white p-2'>
                {movie}
            </div>
        )
    }


    return (
        <>
            <div className="grid grid-flow-col container mx-auto rounded-xl bg-white pl-5 pt-4 mt-12 w-100 h-72">
                <div className='row-1'>
                    <div className="movie-title text-4xl font-bold">{data.movie.l}</div>
                    <div className="movie-title text-3xl">{director}</div>
                    <div className="movie-title text-2xl mt-2">{data.movie.s}</div>
                    <div className="movie-title text-2xl mt-2">{data.movie.y}</div>

                    <div className='mt-4 flex'>
                        {/* {console.log(genre)} */}
                        {genre.map((nam) => (
                            <p className='ml-2 bg-stone-200 rounded-lg p-2'>{nam}</p>
                        ))}
                    </div>

                </div>
                <div className='row-2 flex ml-20'>
                    <img alt="poster" className="movie-poster w-40 h-64 rounded-lg" src={`${data.movie.i.imageUrl}`} />
                </div>
                <div className='flex m-auto'>
                    <button type="button" className="rounded-full items-center border border-black hover:bg-stone-200 w-12 h-12" onClick={() => addMovie(data.movie.l)}>
                        +
                    </button>
                </div>
            </div>

            {/* <div className='mt-6 bg-sky-100 w-100 h-96 rounded-xl '>

                {
                    movieList.map(movie => <MovieListItem key={movie} item={movie} />)
                }

            </div> */}


        </>
    );

}

export default CurrentMovie;