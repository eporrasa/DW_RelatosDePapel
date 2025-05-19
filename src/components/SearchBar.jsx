import React from 'react'
import './SearchBar.css'

const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search-container">
            <div className="search-bar" >
                <img className="search-bar__icon" src="/search.svg" alt="Search"/>
                <input className="search-bar__input" type="text"
                       placeholder="Buscar libros"
                       value={searchTerm}
                       onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar
