import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]

            )
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        // str takes string and n is a number :truncate over 500letter if the description is longer then 
        // 500 it print ...
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">

                {/* title */}
                <h1 className="banner_title">
                    {/* it checks for if we have movie title then print movie title if not then movie name  and if not then original name */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div with 2 button */}
                <div className="banner_buttons">
                    <button className="banner_button">Play
                </button>
                    <button className="banner_button">My List
                </button>
                </div>
                {/* description */}
                <h1 className="banner_description">
                    {truncate(movie?.overview, 200)}
                </h1>

            </div>
            <div className="banner-fadeBotom">
                
                </div>

        </header>
    )
}
export default Banner;