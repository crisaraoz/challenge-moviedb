import { useEffect, useState } from 'react';
import getMovie from '../../api/getMovie';
import getFavGenres from '../../api/getFavGenres';
import ButtonPlay from '../PlayButton/PlayButton';
import './popMovies.css';
import PlayButton from '../PlayButton/PlayButton';

function PopMovies() {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      getMovie('popular', 1).then((movie) => setMovies(movie));
      getFavGenres().then((genre) => setGenres(genre))
    }, []);

    const movieGenres = [];
    
    movies.map(gen => { return movieGenres.push(gen.genre_ids)});

    return(
        <div className='popularContainer'>
            <div className='textContinueWatching'>
                <div className='textWithinContinue'>
                    <h3>Popular Movies 2022</h3>
                </div>
                <p className='allMovies'>
                    All movies {'>'}
                </p>
            </div>

            <div className='popularMoviesDiv'>
                <div className='moviePopularCard'>
                    <img alt='' className='popularImg' src={movies.length === 20 ? "https://image.tmdb.org/t/p/original/" + movies[19].backdrop_path : null} />
                    <div className='playTrailer'>
                        <ButtonPlay arrow='left'/>
                        <div className='movieData'>
                            <h5 className='h5Popular'>{movies.length === 20 ? movies[19].original_title : null}</h5>                            

                            <div className="genresMovie">
                                {
                                    genres.map(gen => {
                                        return movieGenres[19].map(movGen => {
                                            if(gen.id === movGen) {
                                                return <p className='pPopular'>{gen.name}</p>
                                            }
                                        })
                                    })
                                }
                            </div>

                        </div>
                        <div className='duration'>
                            <span></span>
                            <div className='starPopularDiv'>
                                <img alt='' src='./star.png' />
                                <p>{movies.length === 20 ? movies[19].vote_average : null}</p>
                            </div>

                        </div>
                    </div>

                    <div className='hoverCard'>
                        <h3 className='titleHoverCard'>{movies.length === 20 ? movies[19].original_title : null}</h3>
                        <p className='voteHoverCard'>{movies.length === 20 ? "Vote Average: " +  movies[19].vote_average : null}</p>
                        <p className='overviewHoverCard'>{movies.length === 20 ? movies[19].overview : null}</p>
                    </div>
                </div>

                <div className='moviePopularCard'>
                    <img alt='' className='popularImg' src={movies.length === 20 ? "https://image.tmdb.org/t/p/original/" + movies[6].backdrop_path : null} />
                    <div className='playTrailer'>
                        <ButtonPlay arrow='left'/>
                        <div className='movieData'>
                            <h5 className='h5Popular'>{movies.length === 20 ? movies[6].original_title : null}</h5>

                            <div className="genresMovie">
                                {
                                    genres.map(gen => {
                                        return movieGenres[6].map(movGen => {
                                            if(gen.id === movGen) {
                                                return <p>{gen.name}</p>
                                            }
                                        })
                                    })
                                }
                            </div>

                        </div>
                        <div className='duration'>
                            <span></span>
                            <div className='starPopularDiv'>
                                <img alt='' src='./star.png' />
                                <p>{movies.length === 20 ? movies[6].vote_average : null}</p>
                            </div>

                        </div>
                    </div>

                    <div className='hoverCard'>
                        <h3 className='titleHoverCard'>{movies.length === 20 ? movies[6].original_title : null}</h3>
                        <p className='voteHoverCard'>{movies.length === 20 ? "Vote Average: " +  movies[6].vote_average : null}</p>
                        <p className='overviewHoverCard'>{movies.length === 20 ? movies[6].overview : null}</p>
                    </div>
                </div>

                <div className='moviePopularCard'>
                    <img alt='' className='popularImg' src={movies.length === 20 ? "https://image.tmdb.org/t/p/original/" + movies[2].backdrop_path : null} />
                    <div className='playTrailer'>
                        <PlayButton arrow='left'/>
                        <div className='movieData'>
                            <h5 className='h5Popular'>{movies.length === 20 ? movies[2].original_title : null}</h5>

                            <div className="genresMovie">
                                {
                                    genres.map(gen => {
                                        return movieGenres[2].map(movGen => {
                                            if(gen.id === movGen) {
                                                return <p>{gen.name}</p>
                                            }
                                        })
                                    })
                                }
                            </div>

                        </div>
                        <div className='duration'>
                            <span></span>
                            <div className='starPopularDiv'>
                                <img alt='' src='./star.png' />
                                <p>{movies.length === 20 ? movies[2].vote_average : null}</p>
                            </div>

                        </div>
                    </div>

                    <div className='hoverCard'>
                        <h3 className='titleHoverCard'>{movies.length === 20 ? movies[2].original_title : null}</h3>
                        <p className='voteHoverCard'>{movies.length === 20 ? "Vote Average: " +  movies[2].vote_average : null}</p>
                        <p className='overviewHoverCard'>{movies.length === 20 ? movies[2].overview : null}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopMovies;