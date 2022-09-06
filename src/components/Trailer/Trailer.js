import ButtonPlay from '../PlayButton/PlayButton';
import Cards from '../Cards/Cards';
import './trailer.css';
import { useEffect, useState } from 'react';
import getMovie from '../../api/getMovie';
import FavouriteGenres from '../FavouriteGenres/FavouriteGenres';

function Trailer(){

    const [movies, setMovies] = useState([]);
    const [leftBar, setLeftBar] = useState(true);
    const showLeftbar = () => setLeftBar(!leftBar);
  
    useEffect(() => {
      getMovie('upcoming', 1).then((movie) => setMovies(movie));
    }, []);

    return(
        <div className={leftBar ? 'trailersContainer' : 'trailersContainer active'}>
            <div className='triangleTrailers' onClick={showLeftbar}>
                <ButtonPlay arrow={leftBar ? '' : 'left'} />
            </div>

            <div className={leftBar ? 'trailers' : 'trailers active displayNone'}>
                <div className='trailersText'>
                    <h2>New Trailers</h2>
                    <div className='Sort_Today'>
                        <p className='sortP'>Sort By</p>
                        <div className='todayDiv'>
                            <p>
                                Today
                            </p>
                            <div className='arrowsToday'>
                                <img alt='' src='./arrowTodayTop.png'/>
                                <img alt='' src='./arrowTodayBottom.png'/>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='moviesCardContainer'>
                    {
                        movies.length === 20 ? 
                            <div className='moviesCardContainerWithin'>
                                <Cards
                                    imgMovie={movies[19].backdrop_path}
                                    title={movies[19].original_title}
                                    vote_average={movies[19].vote_average}
                                    overview={movies[19].overview}
                                />
                                <Cards
                                    imgMovie={movies[1].backdrop_path}
                                    title={movies[1].original_title}
                                    vote_average={movies[1].vote_average}
                                    overview={movies[1].overview}
                                />
                            </div>
                            :
                            null
                    }
                </div>
                
            </div>

            <div className={leftBar ? 'favouriteDiv' : 'favouriteDiv active displayNone'}>
                <FavouriteGenres/>
            </div>

        </div>
    )
}

export default Trailer;