function FiltroCategoria({ categoriaSeleccionada, cambiarCategoria }) {
  const categorias = ["Todas", "Consolas", "Accesorios"];

  return (
    <div className="mb-4">
      <label htmlFor="filtroCategoria" className="form-label fw-bold">
        Filtrar por categoría:
      </label>

      <select
        id="filtroCategoria"
        className="form-select"
        value={categoriaSeleccionada}
        onChange={(evento) => cambiarCategoria(evento.target.value)}
      >
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroCategoria;