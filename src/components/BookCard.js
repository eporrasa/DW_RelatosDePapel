import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalContext.jsx";
import {Link} from "react-router-dom";

const BookCard = ({book}) => {
    const { sessionLanguage} = useContext(GlobalContext);



    console.log(
        sessionLanguage
    )
    return (
        <div className="book-card">
            <h2 className="book-card__title">
                <Link to={`/books/book/${book.id}`} className="book-card__title">
                    {book.titulo}
                </Link>
            </h2>
            <p className="book-card__content"><strong>ISBN:</strong> {book.isbn}</p>
            <p className="book-card__content"><strong>Año Publicación:</strong> {book.anio_publicacion}</p>
            <p className="book-card__content"><strong>Páginas:</strong> {book.paginas}</p>
            <p className="book-card__content"><strong>Idioma:</strong> {book.idioma}</p>
            <p className="book-card__content"><strong>Descripción:</strong> {book.descripcion}</p>
            <p className="book-card__content"><strong>Precio:</strong> {book.precio}</p>
        </div>

    )
}
export default BookCard
