import {useEffect, useState} from "react";
import {books as ListaLibros, books as booksList} from '../data/dataBooks';


const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setErrorMessage('');

            try {
                // Simulación de retardo
                await new Promise(resolve => setTimeout(resolve, 2000));

                const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=<KEY>');

                if (!response.ok) {
                    throw new Error('Error con los libros');
                }

                const data = await response.json();
                //console.log(data);
                if(data.Response === 'False') {
                    setErrorMessage('Error con la data de los libros');
                    setBooks([]);
                    return;
                }

                setBooks(data.results || [])

                setErrorMessage('');
                setLoading(false);

                console.log(
                    booksList
                )

            } catch (error) {
                console.error(`Error obteniendo los libros: ${error}`);
                setBooks(ListaLibros)
                console.log(
                    booksList
                )
                //setErrorMessage('Error obteniendo los libros. Por favor intenta más tarde.');
            } finally {
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    return {books, loading};

}

export default useBooks;