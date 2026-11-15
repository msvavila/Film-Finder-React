import React from 'react'
import SearchBar from './SearchBar'
import SortControls from './SortControls'

const Header = ({ onSearch, onSortChange }) => {
  return (
    <header className="film-content">
        <h1>Welcome to Film Finder</h1>
        <p> Discover popular movies and find your next favorite film</p>

    <SearchBar onSearch={onSearch} />
    <SortControls onSortChange={onSortChange} />
    
    </header>
  )
}

export default Header