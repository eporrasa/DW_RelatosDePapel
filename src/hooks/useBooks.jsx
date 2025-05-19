import {useEffect, useState} from "react";
import { books as booksList } from '../data/dataBooks';


const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=<KEY>');
                const data = await response.json();
                setBooks(data.results);
                setLoading(false);
            } catch (error) {
                setBooks(booksList);
            } finally {
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    return {books, loading};

}

export default useBooks;