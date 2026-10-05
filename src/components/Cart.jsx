function Cart({ carrito, eliminarDelCarrito }) {
  return (
    <section className="mt-5">
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <div className="alert alert-info">
          El carrito está vacío.
        </div>
      ) : (
        <>
          <div className="list-group">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{producto.nombre}</strong>
                  <br />
                  ${producto.precio.toLocaleString("es-CL")}
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <strong>
              Productos en el carrito: {carrito.length}
            </strong>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;