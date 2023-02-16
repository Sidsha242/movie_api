import Search from './components/search/Search';
import { useState } from 'react';
import CurrentMovie from './components/CurrentMovie';
import MovieList from './components/MovieList';


function App() {


  const [currentMovie, setCurrentMovie] = useState("");

  const [movieList, setMovieList] = useState([]);

  // console.log(movieList);

  const handleOnSearchChange = (searchData) => {
    setCurrentMovie(searchData.value);
  }

  return (
    <div className="container mx-auto bg-slate-300 rounded-xl shadow border p-6 m-6 h-auto">
      {/* <MovieContext.Provider> */}
      <Search onSearchChange={handleOnSearchChange} />
      {currentMovie && <CurrentMovie data={currentMovie} movieList={movieList} setmovieList={setMovieList} />}
      <MovieList items={movieList} />
      {/* </MovieContext.Provider> */}
    </div>
  );
}

export default App;
