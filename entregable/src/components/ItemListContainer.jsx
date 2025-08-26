import React from 'react'

function ItemListContainer({producto, precio}) {
  return (
    <div>
      <h2>Producto: {producto}</h2>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default ItemListContainer