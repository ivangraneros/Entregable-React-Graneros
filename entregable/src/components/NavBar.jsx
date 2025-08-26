import React from 'react'
import CartWidget from './CartWidget'
function NavBar() {
  return (
    <>
      <div>
          <ul className='navbar'>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
              <CartWidget />
          </ul>
      </div>

      
    </>
  )
}

export default NavBar