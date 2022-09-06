import { useEffect, useState } from 'react';
import getMovie from '../../api/getMovie';
import ButtonPlay from '../PlayButton/PlayButton';
import './continueWatching.css';

function ContinueWatching() {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      getMovie('popular', 1).then((movie) => setMovies(movie));
    }, []);

    return(
        <div className='continueContainer'>
            <div className='textContinueWatching'>
                <div className='textWithinContinue'>
                    <h3>Continue Watching</h3>
                    <span>|</span>
                    <p>5 movies</p>
                </div>
                <p className='allMovies'>
                    All movies {'>'}
                </p>
            </div>

            <div className='moviesContinueWatching'>
                <div className='cardContinue'>
                    <img alt='' className='trendingImg' src={movies.length === 20 ? "https://image.tmdb.org/t/p/original/" + movies[12].backdrop_path : null} />
                    <div className='trendingContinue'>
                        <p>#1 Trending</p>
                        <img height='13' alt=''src='./fire.png' />
                    </div>
                    <div className='playTrailer'>
                        <ButtonPlay arrow='left'/>
                        <div className='movieData dataContinue'>
                            <h5>{movies.length === 20 ? movies[12].original_title : null}</h5>
                            <p>3h ago</p>
                        </div>
                        <div className='duration'>
                            <span></span>
                            <p className='duration_P'>02:28:05</p>
                        </div>
                    </div>


                    <div className='hoverCard'>
                        <h3 className='titleHoverCard'>{movies.length === 20 ? movies[12].original_title : null}</h3>
                        <p className='voteHoverCard'>{movies.length === 20 ? "Vote Average: " +  movies[12].vote_average : null}</p>
                        <p className='overviewHoverCard'>{movies.length === 20 ? movies[12].overview : null}</p>
                    </div>
                </div>

                <div className='cardContinue'>
                    <img alt='' className='trendingImg' src={movies.length === 20 ? "https://image.tmdb.org/t/p/original/" + movies[1].backdrop_path : null} />
                    <div className='friendsContinue'>
                        <div className='friendImgContinue'><img alt='' src='./user.png' /></div>
                        <div className='friendImgContinue2 '><img alt='' src='./user.png' /></div>
                        <p>2 viewers</p>
                    </div>

                    <div className='nameAndSound'>
                        <div className='nameContinue'>
                            <p>{movies.length === 20 ? movies[1].original_title : null}</p>
                            <span>Jan 2022</span>
                        </div>
                        <div className='soundContainer'>
                            <img alt='' src='./sound.png' />
                        </div>
                        <div className='playTrailer imgSound'>
                            <img alt='' src='./soundBar.png' />
                        </div>
                    </div>

                    <div className='hoverCard'>
                        <h3 className='titleHoverCard'>{movies.length === 20 ? movies[1].original_title : null}</h3>
                        <p className='voteHoverCard'>{movies.length === 20 ? "Vote Average: " +  movies[1].vote_average : null}</p>
                        <p className='overviewHoverCard'>{movies.length === 20 ? movies[1].overview : null}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContinueWatching;