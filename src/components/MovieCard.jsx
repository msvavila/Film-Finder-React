import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({ Title, Year, Poster, imdbID }) => {
  return (
   <article className="movie">
      <Link to={`/movie/${imdbID}`} className="movie-link">
      <img className="movie-poster"
        src={Poster && Poster !== "N/A" ? Poster : "/no-poster.png"}
        alt={Title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/no-poster.png"
        }}
        />
      <h3 className="movie__title">{Title}</h3>
      <p className="movie__year">{Year ?? ""}</p>
      </Link>
    </article>
  )
}

export default MovieCard