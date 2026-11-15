import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <form className="search-bar" onSubmit={(e) => { e.preventDefault(); onSearch(searchTerm); }}>
        <input type="text" id="search-input" placeholder="Search for movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button id="search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>

    </form>
  )
}

export default SearchBar