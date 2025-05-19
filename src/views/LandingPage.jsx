
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from "../hooks/useBooks.jsx";
import BookCard from "../components/BookCard.jsx";

const LandingPage = () => {

    console.log("Renderizando LandingPage");

    const {books, loading} = useBooks();

    if (loading) {
        return (
            <div className="landing-page">
                <div className="loading-container">
                    <div className="spinner"/>
                    <p>Cargando...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="landing-page">
            <div className="landing__books-detail-link">
                <Link to={`/books/detalle`}>Ver Detalle del Libro</Link>
            </div>
            {books.map(book => (
                <BookCard key={book.id} book={book}/>
            ))}
        </div>
    );
};

export default LandingPage;
