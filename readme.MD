
# REST API de usuarios

## Requisitos

* Node.js (> 7.6)
* MongoDB (> 3.2)

## Configuración

* Clonar este repositorio: `git@github.com:JulianBonilla7/node_api_tutorial.git`
* Navegar a la carpeta del repositorio: `cd node_api_tutorial`
* Instalar dependencias: `npm install`
* Crear archivo de variables de entorno `.env` (ver `.env.sample` para un ejemplo), y configurar allí la base de datos y el puerto a usar.
* Asegurarse que MongoDB está activo y corriendo, e iniciar la aplicación con `npm start`
* Usar `npm test` para pruebas. (*pendiente*) 

## Modelo de usuario

El modelo usuario contiene estos atributos, más el `_id` generado por MongoDB como identificador.

```
{
  "_id": Number,
  "name": "String",
  "last_name": "String",
  "address": "String",
  "city": "String",
  "state": "String",
  "country": "String",
  "phone": "String",
  "area_code": "String",
  "birthdate": "Date"
}
```

## CREATE

`POST /users`

La operación de creación recibirá un objeto con parámetros en el cuerpo de la petición correspondientes a los atributos del modelo Usuario.

### Ejemplo

```
POST api/users'
{
  "name": "Julian",
  "last_name": "Bonilla",
  "address": "Calle Falsa 123",
  "city": "Tuluá",
  "state": "Valle",
  "country": "Colombia",
  "phone": "1234567890",
  "area_code": "763021",
  "birthdate": "1994-11-30"
}'
```

__Respuesta__

El código de respuesta debe ser `201 Created`, y deberá retornar el usuario como objeto JSON
  
__Errores__

* `500 Server Error` Este error se debe retornar si ocurre un error al guardar el usuario en la base de datos.

## Update

`PUT /users/:id`

Se requiere el `id` en la url y parámetros en el cuerpo de la petición correspondientes a los atributos del modelo Usuario.

__Respuesta__

El codigo de respuesta debe ser `201 Created` y deberá retornar el nuevo objeto JSON del usuario modificado.

__Errores__

* `500 Server Error`  Si ocurre un error al actualizar el usuario
* `404 Not Found`  Si no existe el usuario con el id proporcionado

## Index

`GET /users`

Retorna la lista de todos los usuarios existentes.

__Respuesta__

El codigo de respuesta debe ser `200 OK`

__Errores__

* `500 Server Error`  Si ocurre un error al consultar los usuarios.

## Show

`GET api/users/:id:`

__Respuesta__

El codigo de respuesta debe ser `200 OK` y retornará el objeto JSON del usuario solicitado.

__Errores__

* `500 Server Error` Error al realizar la petición.
* `404 Not Found` El usuario no existe.

## Destroy

`DELETE api/users/:id:`

__Respuesta__

El código de respuesta debe ser `204 No Content`, y no habrá contenido en la respuesta.

__Errores__

* `500 Server Error` Error al realizar la petición.
* `404 Not Found` El usuario no existe.