import {useEffect, useState} from 'react'
import SearchBar from "./components/SearchBar.jsx";
//import './App.css'
import { books as ListaLibros } from './data/dataBooks';
import Spinner from "./components/Spinner.jsx";
import BookCard from "./components/BookCard.jsx";
import {useDebounce} from "react-use";


const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [booksList, setBooksList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useDebounce(() => {
        setDebouncedSearchTerm(searchTerm);
    }, 500, [searchTerm])

    // Función de filtrado
    const filteredBooks = booksList.filter(book => {
        const searchText = debouncedSearchTerm.toLowerCase();
        return (
            book.titulo.toLowerCase().includes(searchText) ||
            book.descripcion.toLowerCase().includes(searchText) ||
            book.idioma.toLowerCase().includes(searchText)
        );
    });

    const fetchBooks = async () => {
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=<KEY>');

            if (!response.ok) {
                throw new Error('Error con los libros');
            }

            const data = await response.json();
            console.log(data);
            if(data.Response === 'False') {
                setErrorMessage('Error con la data ---- de los libros');
                setBooksList([]);
                return;
            }

            setBooksList(data.results || [])

            setErrorMessage('');
            setLoading(false);

            console.log(
                booksList
            )

        } catch (error) {
            console.error(`Error obteniendo los libros ****: ${error}`);
            setBooksList(ListaLibros)
            console.log(
                booksList
            )
            //setErrorMessage('Error obteniendo los libros. Por favor intenta más tarde.');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="/logo.png" alt="Logo"/>
                    <h1>Encuentra los <span className="text-gradient">Libros</span> que quieras facilmente</h1>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>

                <section className="all-books">
                    <h2 className="mt-[40px]">Todos los libros</h2>

                    {loading ? (
                        <Spinner/>
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredBooks.length === 0 ? (
                                <div className="col-span-full text-center py-8">
                                    <p className="text-gray-500">No se encontraron libros con ese criterio</p>
                                </div>
                            ) : (
                                filteredBooks.map(book => (
                                    <BookCard key={book.id} book={book}/>
                                ))
                            )}
                        </div>
                    )                    }
                </section>
            </div>
        </main>
    )
}
export default App
