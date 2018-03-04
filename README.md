# Resolvit test exercise
Este node js script procesa un archivo de texto que debe ser proporcionado por el usuario y realiza las siguientes acciones:

* Indexa todas las oraciones de él o los párrafos, tomando como criterio que las oraciones están separadas por puntos (.).
* Obtiene todas las palabras únicas del texto.
* Indica cuantas veces se repite cada palabra única.
* Indica en que posición del índice de oraciones se encuentra cada palabra única.
* Excluye por defecto las palabras, "a", "the", "and", "of", "in", "be", "also" y "as", pueden agregarse o eliminarse palabras en el array ignoreWords, para mayor flexibilidad.
* Muestra el resultado en consola en formato json.

## Requerimientos
* Node Js 8.9.4 o superior

## Instalación
```
$ git clone git@github.com:grunch/resolvit.git
$ cd resolvit
$ npm install
```
## Uso
Es necesario indicar como argumento el archivo de texto a procesar, se incluye en el proyecto un archivo de texto de ejemplo, llamado ejemplo.txt.
```
$ node app ejemplo.txt
```
