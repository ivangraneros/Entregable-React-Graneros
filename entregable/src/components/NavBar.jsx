import CartWidget from './CartWidget'

function NavBar() {
  return (
    <>
        <nav>
          <ul className='navbar'>
              <li>
                Inicio
              </li>
              <li>
                Producto
              </li>
              <li>
                Contacto
              </li>
              <CartWidget />
          </ul>
        </nav>
    </>
  )
}

export default NavBar