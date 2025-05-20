import React from 'react'

const BookCard = ({book: {titulo, descripcion, precio, portada}}) => {

    // Formatear el precio como moneda
    const formattedPrice = Number(precio).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP', // Cambia esto según tu moneda (USD, EUR, etc.)
        minimumFractionDigits: 0, // El peso colombiano normalmente no usa decimales
        maximumFractionDigits: 0
    });

    return (
        <div className="book-card">
            <img src={`/portadas/${portada}`}
                 alt={titulo}
            />

            <div className="mt-4">
                <h3>{titulo}</h3>

                <div>
                    <p className="card-text text-warning text-center fw-bold mb-0">
                        {formattedPrice}
                    </p>
                </div>

            </div>

        </div>
    )
}
export default BookCard
