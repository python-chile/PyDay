# PyDay Chile 2024

Repositorio de PyDay Chile 2024
Website: https://wwww.pyday.cl/

# Ejecución
python -m http.server
Acceso por browser en http://localhost:8000

## Desarrollo de la Web

Los puntos de entrada son los archivos:
* index.html
* copiapio.html
* valparaiso.html

La definición de secciones en root se modifican en "assets/sections". Si se debe agregar/remover sección se realiza en "assets/js/display.js"
La definición de secciones en /{ciudad} se modican en "assets/sections/{ciudad}". Si se debe agregar/remover sección se realiza en "assets/js/{ciudad}.js"

Adición de logos de sponsors/otros se agregan en "assets/logos"

Adición de fotos de speakers van en "assets/speakers/{ciudad}"

Edición de módulos a programa se realizan en "assets/js/{ciudad}/schedule.js"