# API DE VIDEOJUEGOS CON NODEJS Y EXPRESS
### Creado por Agustin Antunez

## Pasos de instalacion

1. Ejecutar en la consola **npm install** dentro de la carpeta ***api_games*** para que se instalen todas las dependencias necesarias.
2. Colocar las variables de entorno **(.env)** en el archivo .env_sample (una vez obtenidas las claves de acceso cambiar el nombre del archivo a **".env"** o generar otro archivo con ese nombre)
3. Empezar a probar la API

## Rutas de acceso

- **http://localhost:3000/api/v1/games** => Muestra una lista de juegos 
- **http://localhost:3000/api/v1/games/:id** => Muestra un juego buscado por ID
- **http://localhost:3000/api/v1/games/filtro** => Busca juegos por genero o nombre con un limite de 10 resultados por defecto

Ejemplos: 

http://localhost:3000/api/v1/games/3990 (Juego por ID de The Last Of Us)

http://localhost:3000/api/v1/games/filtro?search=the last of us

http://localhost:3000/api/v1/games/filtro?genres=action







