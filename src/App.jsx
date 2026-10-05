import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Estado para almacenar los productos cargados
  const [productos, setProductos] = useState([]);

  // Estado para almacenar los productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Estado para controlar la carga
  const [cargando, setCargando] = useState(true);

  // Cargar productos desde el archivo JSON
  useEffect(() => {
    fetch("/src/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setCargando(false);
      });
  }, []);

  // Agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoYaExiste = carritoActual.some(
        (item) => item.id === producto.id
      );

      if (productoYaExiste) {
        return carritoActual;
      }

      return [...carritoActual, producto];
    });
  };

  // Eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((producto) => producto.id !== id)
    );
  };

  return (
    <>
      <Navbar cantidadCarrito={carrito.length} />
      <div className="container py-4">
        <header className="text-center mb-5">
          <h1>GameZone Store</h1>
          <p className="lead">
            Tienda de videojuegos y accesorios
          </p>
        </header>

        {cargando ? (
          <div className="text-center">
            <p>Cargando productos...</p>
          </div>
        ) : (
          <>
            <section id="catalogo" className="mb-5">
              <h2 className="mb-4">Catálogo de productos</h2>

              <ProductList
                productos={productos}
                agregarAlCarrito={agregarAlCarrito}
                carrito={carrito}
              />
            </section>

            <section id="carrito">
              <Cart
                carrito={carrito}
                eliminarDelCarrito={eliminarDelCarrito}
              />
            </section>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;