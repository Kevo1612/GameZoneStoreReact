import ProductCard from "./ProductCard";

function ProductList({ productos, agregarAlCarrito, carrito }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
          estaEnCarrito={carrito.some(
            (item) => item.id === producto.id
          )}
        />
      ))}
    </div>
  );
}

export default ProductList;