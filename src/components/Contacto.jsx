import { useState } from "react";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: value,
    }));

    setError("");
    setExito("");
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (
      !formulario.nombre.trim() ||
      !formulario.email.trim() ||
      !formulario.mensaje.trim()
    ) {
      setError("Debes completar todos los campos.");
      setExito("");
      return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(formulario.email)) {
      setError("Ingresa un correo electrónico válido.");
      setExito("");
      return;
    }

    setError("");
    setExito("Mensaje enviado correctamente.");

    setFormulario({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="mt-5 mb-5">
      <h2 className="mb-4">Contacto</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <p className="text-muted">
            ¿Tienes alguna consulta? Escríbenos y nos pondremos en contacto
            contigo.
          </p>

          <form onSubmit={manejarEnvio} noValidate>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">
                Nombre
              </label>

              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label fw-bold">
                Mensaje
              </label>

              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {exito && (
              <div className="alert alert-success" role="alert">
                {exito}
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;