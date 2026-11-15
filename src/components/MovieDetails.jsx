import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = "28493f65";
const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);

    async function fetchMovieDetails() {
        try {
            const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error(error);
            setMovie({ Response: "False" });
        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [imdbID]);

    if (!movie) {
        return <p>Loading movie details...</p>;
    }

    if (movie.Response === "False") {
        return <p>Unable to load movie details.</p>;
    }

    return (
        <div className="movie-details__container">

            <Link to="/" className="back-link">
                &lt;- Back to Movies
            </Link>
            <div className="movie-details">
                <div className="movie-details__left">
                    <img className="movie-details__poster"
                        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : `${import.meta.env.BASE_URL}no-poster.png`}
                        alt={movie.Title}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `${import.meta.env.BASE_URL}no-poster.png`

                        }}
                    />
                    <h1>{movie.Title}</h1>
                    <p>Year: {movie.Year}</p>
                    <p>Rating: {movie.imdbRating}/10</p>
                    <p>Released: {movie.Released}</p>
                </div>

                <div className="movie-details__right">
                    <p><strong>Genre</strong>{movie.Genre}</p>
                    <p><strong>Writer</strong>{movie.Writer}</p>
                    <p><strong>Actors</strong>{movie.Actors}</p>
                    <p><strong>Plot</strong>{movie.Plot}</p>
                    <p><strong>Language</strong>{movie.Language}</p>
                    <p><strong>Awards</strong>{movie.Awards}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;