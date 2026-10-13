# El León Carmesí — Escudo medieval interactivo

Página estática con model-viewer de Google. Incluye el modelo GLB y sus texturas PBR.

## Publicar con GitHub Pages

1. Crea un repositorio público, por ejemplo `escudo-medieval-web`.
2. Sube el contenido de esta carpeta a la raíz del repositorio. `index.html` y `escudo.glb` deben quedar al mismo nivel.
3. Abre **Settings → Pages**.
4. En **Source**, elige **Deploy from a branch**.
5. Selecciona **main** y **/(root)**, y pulsa **Save**.
6. Espera a que GitHub termine la publicación. El enlace aparecerá en esa misma sección.

El archivo `.nojekyll` permite publicar directamente estos archivos estáticos. No se necesita un servidor Node, instalación de dependencias ni base de datos.

## Archivos de la página

- `index.html`: página principal.
- `styles.css`: diseño adaptable a móvil y escritorio.
- `app.js`: controles de materiales.
- `model-viewer.min.js`: biblioteca model-viewer 4.1.0.
- `escudo.glb`: modelo con las texturas incorporadas.
- `poster.png`: imagen mostrada durante la carga.
- `MODEL_VIEWER_LICENSE.txt`: licencia de la biblioteca.

## Modelo

10,444 triángulos, 0 n-gons y cuatro materiales: madera roja, acero, bronce y cuero. Texturas de 1024 y 512 px. GLB validado sin errores ni advertencias.

Los tres controles permiten oscurecer el acero, envejecer el bronce y activar o desactivar el mapa normal del león. El modelo se gira arrastrando y se acerca con la rueda o con dos dedos.

Documentación: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site y https://modelviewer.dev/.

**Estado:** preparado para publicación. La existencia de estos archivos no significa que GitHub Pages ya esté activado.
