import React from 'react'

const MovieSkeleton = () => {
  return (
    <article className="movie">
      <div className="skeleton-poster"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-year"></div>
    </article>
  )
}

export default MovieSkeleton