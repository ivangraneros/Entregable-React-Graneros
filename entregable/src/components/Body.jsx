import ItemListContainer from './ItemListContainer'

function Body() {
  return (
    <div>
        <h1>Bienvenidos a la Tienda</h1>
        <ItemListContainer producto="Parlante" precio="45000" />
        <ItemListContainer producto="Auriculares" precio="35000" />
    </div>
    
  )
}

export default Body