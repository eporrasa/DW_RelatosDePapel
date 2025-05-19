import {useEffect, useState} from 'react'
import SearchBar from "./components/SearchBar.jsx";
import './App.css'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <hendler>
                    <img className="logo" src="/logo.png" alt="Logo"/>
                    <h1>Encuentra los <span className="text-gradient">Libros</span> que quieras facilmente</h1>
                </hendler>

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
        </main>
    )
}
export default App
