# 🎮 GameZone Store React

Aplicación web para una tienda online de videojuegos y accesorios, desarrollada como proyecto para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC.

El proyecto utiliza **React, JavaScript, HTML5, CSS3 y Bootstrap 5**, incorporando componentes reutilizables, carga dinámica de productos, filtrado por categorías, carrito de compras y formulario de contacto con validación.

---

## 📋 Descripción del proyecto

**GameZone Store** es una tienda web dedicada a la venta de videojuegos y accesorios.

La aplicación permite al usuario:

- Visualizar los productos disponibles.
- Consultar información de cada producto.
- Filtrar productos por categoría.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Visualizar la cantidad de productos seleccionados.
- Utilizar un formulario de contacto.
- Validar los datos ingresados en el formulario.
- Navegar entre las diferentes secciones del sitio.

Los productos se cargan dinámicamente desde un archivo JSON utilizando `fetch()` y React.

---

## 🎯 Objetivos

Los principales objetivos del proyecto son:

- Aplicar conocimientos de HTML5 y CSS3.
- Utilizar Bootstrap 5 para construir una interfaz responsive.
- Implementar funcionalidades dinámicas mediante JavaScript.
- Desarrollar una aplicación utilizando React.
- Dividir la aplicación en componentes reutilizables.
- Utilizar `useState` para administrar estados.
- Utilizar `useEffect` para cargar información dinámicamente.
- Utilizar props para comunicar información entre componentes.
- Implementar filtrado de productos por categoría.
- Implementar un carrito de compras.
- Implementar validación de un formulario de contacto.
- Publicar la aplicación mediante GitHub Pages.

---

## 🚀 Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **React**
- **Vite**
- **Bootstrap 5**
- **Git**
- **GitHub**
- **GitHub Pages**

---

## ✨ Funcionalidades principales

### 🛍️ Catálogo de productos

La página principal muestra los productos disponibles mediante tarjetas.

Cada tarjeta contiene:

- Imagen del producto.
- Nombre.
- Categoría.
- Precio.
- Descripción.
- Botón para agregar al carrito.

Los productos son obtenidos dinámicamente desde:

```text
public/data/productos.json
```

---

### 🔎 Filtro por categoría

El catálogo cuenta con un filtro que permite seleccionar:

- Todas
- Consolas
- Accesorios

Al seleccionar una categoría, la lista de productos se actualiza dinámicamente.

Ejemplo:

```text
Todas
   ↓
8 productos

Consolas
   ↓
3 productos

Accesorios
   ↓
5 productos
```

---

### 🛒 Carrito de compras

La aplicación permite gestionar un carrito de compras.

El usuario puede:

- Agregar productos.
- Ver la cantidad de productos seleccionados.
- Identificar productos que ya fueron agregados.
- Eliminar productos.
- Visualizar el carrito vacío.

Cuando un producto es agregado, el botón cambia de:

```text
Agregar al carrito
```

a:

```text
En el carrito
```

También se actualiza el contador del carrito en la barra de navegación.

---

### 📩 Formulario de contacto

El sitio incluye una sección de contacto con los siguientes campos:

- Nombre.
- Email.
- Mensaje.

El formulario valida la información antes de permitir el envío.

#### Validación de campos vacíos

Si el usuario intenta enviar el formulario sin completar los campos, se muestra:

```text
Debes completar todos los campos.
```

#### Validación del email

Si el correo ingresado no tiene un formato válido, se muestra:

```text
Ingresa un correo electrónico válido.
```

#### Envío correcto

Cuando la información es válida, se muestra:

```text
Mensaje enviado correctamente.
```

---

## ⚛️ Implementación con React

La aplicación está dividida en diferentes componentes para facilitar la organización, reutilización y mantenimiento del código.

### Componentes principales

```text
Navbar.jsx
ProductList.jsx
ProductCard.jsx
FiltroCategoria.jsx
Cart.jsx
Contacto.jsx
Footer.jsx
```

### `Navbar.jsx`

Contiene la barra de navegación del sitio y permite acceder a las diferentes secciones:

- Inicio.
- Videojuegos.
- Accesorios.
- Contacto.
- Carrito.

---

### `ProductList.jsx`

Se encarga de recorrer la lista de productos y generar las tarjetas correspondientes.

Utiliza `ProductCard` para representar cada producto.

---

### `ProductCard.jsx`

Representa individualmente cada producto del catálogo.

Recibe información mediante props y permite agregar productos al carrito.

---

### `FiltroCategoria.jsx`

Contiene el selector utilizado para filtrar los productos por categoría.

Las categorías disponibles son:

```text
Todas
Consolas
Accesorios
```

---

### `Cart.jsx`

Gestiona la visualización de los productos seleccionados.

Permite:

- Mostrar productos agregados.
- Mostrar precios.
- Eliminar productos.
- Mostrar un mensaje cuando el carrito está vacío.

---

### `Contacto.jsx`

Contiene el formulario de contacto y la lógica de validación de:

- Nombre.
- Email.
- Mensaje.

---

### `Footer.jsx`

Contiene el pie de página de la aplicación.

---

## 🔄 Uso de `useState`

Se utiliza `useState` para manejar diferentes estados de la aplicación.

Entre ellos:

- Lista de productos.
- Categoría seleccionada.
- Productos del carrito.
- Estado de carga.
- Datos del formulario.
- Mensajes de error.
- Mensaje de confirmación.

Ejemplo:

```javascript
const [productos, setProductos] = useState([]);
const [categoriaSeleccionada, setCategoriaSeleccionada] =
  useState("Todas");
const [carrito, setCarrito] = useState([]);
```

---

## 🔄 Uso de `useEffect`

Se utiliza `useEffect` para cargar los productos desde el archivo JSON al iniciar la aplicación.

```javascript
useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}data/productos.json`)
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
```

---

## 🔗 Uso de Props

Se utilizan props para comunicar información y funciones entre los componentes.

Por ejemplo, `App.jsx` entrega a `ProductList`:

```javascript
<ProductList
  productos={productosFiltrados}
  agregarAlCarrito={agregarAlCarrito}
  carrito={carrito}
/>
```

De esta forma, los componentes pueden trabajar de manera coordinada y reflejar los cambios realizados por el usuario.

---

## 📁 Estructura del proyecto

```text
GameZoneStoreReact/
│
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── dualsense.jpg
│   │       ├── headset-gaming.avif
│   │       ├── mouse.jpg
│   │       ├── nintendo-switch.avif
│   │       ├── playstation5.avif
│   │       ├── teclado.jpg
│   │       ├── xbox-controller.avif
│   │       └── xbox-series-x.avif
│   │
│   └── data/
│       └── productos.json
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Contacto.jsx
│   │   ├── FiltroCategoria.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Requisitos

Para ejecutar el proyecto localmente se necesita tener instalado:

- Node.js
- npm
- Un navegador web moderno.

---

## 📥 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Kevo1612/GameZoneStoreReact.git
```

Ingresar a la carpeta del proyecto:

```bash
cd GameZoneStoreReact
```

Instalar las dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar en modo desarrollo

Para iniciar el servidor local:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador para utilizar la aplicación.

---

## 🏗️ Crear versión de producción

Para generar la versión optimizada del proyecto:

```bash
npm run build
```

Los archivos generados se almacenarán en:

```text
dist/
```

---

## 👀 Previsualizar la versión de producción

También es posible ejecutar una previsualización local mediante:

```bash
npm run preview
```

---

## 🌐 Publicar en GitHub Pages

El proyecto utiliza `gh-pages` para realizar el despliegue.

Para publicar la aplicación:

```bash
npm run deploy
```

El proceso ejecuta primero:

```bash
npm run build
```

y posteriormente publica la carpeta `dist` en GitHub Pages.

---

## 🔗 Enlaces del proyecto

### Repositorio GitHub

https://github.com/Kevo1612/GameZoneStoreReact

### Aplicación publicada

https://kevo1612.github.io/GameZoneStoreReact/

---

## 🧪 Pruebas realizadas

Durante el desarrollo se verificaron las siguientes funcionalidades:

### Catálogo

- Carga de los productos desde el archivo JSON.
- Visualización de los ocho productos.
- Visualización de imágenes.
- Visualización de nombre, precio y descripción.

### Filtrado

- Visualización de todos los productos.
- Filtrado por categoría **Consolas**.
- Filtrado por categoría **Accesorios**.
- Regreso a la categoría **Todas**.

### Carrito

- Agregar productos.
- Cambio del botón a **En el carrito**.
- Actualización del contador.
- Visualización de productos seleccionados.
- Eliminación de productos.
- Visualización del mensaje **El carrito está vacío**.

### Formulario de contacto

- Validación de campos vacíos.
- Validación del formato del email.
- Mensaje de envío exitoso.
- Mensajes de error y confirmación.

### Interfaz

- Navegación entre las secciones.
- Diseño mediante Bootstrap 5.
- Adaptación de la interfaz a diferentes tamaños de pantalla.

---

## 📱 Diseño responsive

La aplicación utiliza las clases responsive de Bootstrap 5 para adaptar la interfaz a diferentes dispositivos.

Se utilizan componentes y clases como:

```text
container
row
col-md-4
col-lg-3
navbar-expand-lg
```

Esto permite organizar las tarjetas y los elementos de navegación de acuerdo con el tamaño de la pantalla.

---

## 📦 Dependencias principales

Las principales dependencias utilizadas en el proyecto son:

```text
React
React DOM
Bootstrap
```

Para el desarrollo y despliegue se utilizan:

```text
Vite
@vitejs/plugin-react
gh-pages
```
