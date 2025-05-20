import React from 'react'

const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search" >
            <div>
                <img src="/search.svg" alt="Search"/>
                <input type="text"
                       placeholder="Buscar libros"
                       value={searchTerm}
                       onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar
