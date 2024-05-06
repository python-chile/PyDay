# PyDay Chile 2024

Repositorio de PyDay Chile 2024
Website: https://www.pyday.cl/

## Ejecución
python -m http.server
Acceso por browser en http://localhost:8000

## Desarrollo de la Web

Los puntos de entrada son los archivos:
* index.html
* copiapo.html
* valparaiso.html

Las definiciones de las secciones en root se modifican en `"assets/sections"`. Si se quiere agregar o remover una sección, esto debe realizarse en `"assets/js/display.js"`.
Las definiciones de las secciones en /{ciudad} se modifican en `"assets/sections/{ciudad}"`. Si se quiere agregar o remover una sección, se realiza en `"assets/js/{ciudad}.js"`

Adición de logos de sponsors/otros se agregan en `"assets/logos"`

Adición de fotos de speakers van en `"assets/speakers/{ciudad}"`

Edición de módulos a programa se realizan en `"assets/js/{ciudad}/schedule.js"`