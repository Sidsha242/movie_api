import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'
import { MOVIE_API_URL, movieApiOptions } from '../../api';

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {   //will retrieve the data that we have enetered in async
        setSearch(searchData);                 //to update search
        onSearchChange(searchData);            //function passed from parent component 
    }

    const loadOptions = (intputValue) => {     //to load the options
        return fetch(
            `${MOVIE_API_URL}/auto-complete?q=${intputValue}`,
            movieApiOptions
        )
            .then(response => response.json())
            .then((response) => {
                // const list = data.d;

                // list.map((item) => {
                //     console.log(item.l);
                // })
                return {
                    options: response.d.map((movie) => {
                        console.log(movie);
                        return {
                            value: { movie },
                            label: `${movie.l}`,
                        };
                    })
                };
            })
            .catch(err => console.error(err));
    }



    return (
        <AsyncPaginate
            placeholder="Search for a movie"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className="text-center"
        />

    )
}

export default Search