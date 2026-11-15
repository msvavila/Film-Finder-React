import React from 'react'
import MovieCard from './MovieCard'
import MovieSkeleton from './MovieSkeleton'

const MovieList = ({movies, loading}) => {
  if (loading) {
    return (
      <section className="movie-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </section>
    )
  }
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} imdbID={movie.imdbID} />
      ))}
    </section>
  )
}

export default MovieList