function ProductCard({ producto, agregarAlCarrito, estaEnCarrito }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={`${import.meta.env.BASE_URL}${producto.imagen}`}
          className="card-img-top"
          alt={producto.nombre}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>

          <p className="card-text">
            {producto.descripcion}
          </p>

          <p className="fw-bold">
            ${producto.precio.toLocaleString("es-CL")}
          </p>

          <button
            className={`btn mt-auto ${
              estaEnCarrito ? "btn-success" : "btn-primary"
            }`}
            onClick={() => agregarAlCarrito(producto)}
            disabled={estaEnCarrito}
          >
            {estaEnCarrito ? "En el carrito" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;