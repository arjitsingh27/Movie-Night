import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_img_url = "https://image.tmdb.org/t/p/original/"


function Row({ title, fetchURL, isLarge }) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")


    useEffect(() => {
        async function getData() {
            const res = await axios.get(fetchURL)
            // console.log(res)
            setMovies(res.data.results)
        }
        getData()
    }, [fetchURL])


    // console.table(movies)

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                }).catch((error) => console.log(error))
        }
    }

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row-content">
                {
                    movies.map(movie => (
                        <div>
                            <img className={`row-movie ${isLarge && "largeMovie"}`} onClick={() => handleClick(movie)} src={`${base_img_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} />
                            <div>{movie?.name || movie?.title || movie?.original_name}</div>
                        </div>
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
