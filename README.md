# CinePlus — Tarea #1

## Estudiante
Jefferson Steve Tutillo Acero

## Descripción del proyecto
CinePlus es una aplicación web de películas que permite a los usuarios explorar estrenos y películas en cartelera, ver tráilers, leer reseñas con calificación por estrellas y rentar películas. Está construida con HTML5, CSS3, Bootstrap 5, jQuery y AJAX.

## Funcionalidades implementadas

1. **Galería de películas** — Tarjetas cargadas dinámicamente desde `peliculas.json` con AJAX.
2. **Badge de estreno** — Muestra "ESTRENO" (verde) o "EN CARTELERA" (azul) según la fecha de estreno (≤30 días).
3. **Precios dinámicos** — Precio de estreno o normal según la fecha actual.
4. **Spinner de carga** — Indicador de carga con retraso artificial de 5 segundos (Bootstrap Spinner).
5. **Modal de tráiler** — Cada tarjeta tiene un botón "Ver Tráiler" que abre un modal con iframe de YouTube.
6. **Página de renta** — Formulario para seleccionar películas, forma de pago y días de renta, con modal de confirmación.
7. **Reseñas con estrellas** — Reseñas cargadas por AJAX en la página de detalle, con calificación 1–5 estrellas.
8. **Alerta de bienvenida** — Modal de bienvenida mostrado solo la primera visita (localStorage).
9. **Animaciones** — Las tarjetas aparecen con `fadeIn` escalonado al cargar.
10. **Validación de contacto** — Validación con jQuery: campos requeridos, mensaje de 20–50 caracteres, mensajes inline con clases Bootstrap.
11. **Tema visual personalizado** — Fuente Google Fonts (Poppins), paleta de colores personalizada, footer fijo.
12. **Navbar consistente** — Presente en todas las páginas con enlace activo marcado.

## Instrucciones de uso

### Opción A — Live Server (VS Code)
1. Clonar o descargar el repositorio.
2. Abrir la carpeta en **VS Code**.
3. Instalar la extensión **Live Server**.
4. Clic derecho en `index.html` → **Open with Live Server**.
5. El proyecto se abre en `http://127.0.0.1:5500/index.html`.

### Opción B — npx serve (terminal)
1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar:
   ```bash
   npx serve .
   ```
4. Abrir `http://localhost:3000` en el navegador.

> **Nota:** El proyecto debe ejecutarse con un servidor local para que AJAX funcione correctamente. No abrir `index.html` directamente como archivo (`file://`).
