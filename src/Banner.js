import axios from './axios'
import React, { useEffect, useState } from 'react'
import request from './request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await axios.get(request.fetchNetflixOriginal)
            // console.log(res)
            setMovie(
                res.data.results[Math.floor(Math.random() * res.data.results.length)]
            );
            return res;
        }
        getData()
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

    return (
        <header className="banner-poster"
            style={{
                // backgroundSize: "cover",
                // backgroundPosition: "50px 550px",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}
        >
            <div className="banner-content">
                <h1 className="banner-title">{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>

                <h1 className="banner-desc">{truncate(movie?.overview,150)}</h1>

            </div>
            <div className="banner-fadeBottom"></div>

        </header>
    )
}

export default Banner
