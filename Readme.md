# API REST con JavaScript

Interfaz: es una capa de abstracción, creada para que dos sistemas se comuniquen. Por ejemplo un teclado que nos permite interactuar a los humanos con la computadora. 

API (Interfaz de Programación de Aplicaciones): es una capa de abstracción creada para que dos robots se comuniquen. 

REST (transferencia de estado representacional (en inglés representational state transfer)): es el medio para comunicar robots por medio de HTTP, o sea internet. El formato en el que se comunican es JSON, de esta forma se reciben los datos. 

Los usuarios deben de consultar las páginas web y recibir la información que están buscando. Pero no lo hacen directamente con el backend. Sino que el frontend recibe la interacción de los usuarios, y eso lo traducimos a consultas del backend. Entonces el backend que si contiene la informacion la envia al frontend, para que la despliegue a los usuarios. 

## IMPLEMENTACIÓN

Si ingresamos en google la busqueda "github public apis" podremos ir a github ir ver un repositorio donde en un indice se encuentran clasificadas las API. Vemos que hay 3 columnas, para inciar deberíamos elegir una API con CORS que sea NO, más adelante entenderemos que significa. AUTH es el método de autentificación, para iniciar deberíamos contar con una API sin método o con una que nos diga apiKey. En este caso elegimos "https://thedogapi.com/".

Ingresamos en documentación y tenemos la url que debemos de utilizar "https://api.thedogapi.com/v1/images/search". 

Creamos el archivo index.html y main.js. En el archivo html creamos una etiqueta img que será donde veremos las imagenes de los perros en este caso. Pero eliminamos el atributo src, que es donde debería encontrarse la url. 

Con fetch hacemos un llamado a la url, y luego podemos pasar la respuesta como valor del src de la imagen.

Luego cree otra forma de traer el llamado de la API con async await. También agregue que la función se ejecute cuando cargamos la página, colocamos un addEventListener al DOM. Por último coloque que cuando se de click en el boton se ejecute la función también para ir cambiando las imagenes. 

### Endpoints y Query parameters

Son otra de las formas en las que podemos modificar el resultado que nos va a dar nuestra API Rest. Una API puede tener distintas rutas y eso es lo que son los **endpoints**. Por eso las API segmentan su información para no tener que hacer un pedido a toda la base de datos en cada solicitud, sino a la parte que queremos obtener. Para esto ver la documentación de la API que estamos consumiendo es importante para ver las distintas rutas que podemos utilizar. 

Tambien existen los **query parameters** que son información extra a los enpoints, para limitar o especificar mucho mejor cual es el cotenido que queremos pedirla a nuestra API o sea a nuestro backend. Por ejemplo en el endpoint podiamos pedir traer las categorias pero con e lquery parameter podriamos agregar que traiga solo las categorias que comienzan por cierta letra, o un número limitado de categorias, etc. 

Vamos a modificar el archivo main.js para poder implementar los endpoints y query parameters en nuestra función getDog(). Para poder agregar el query parameter utilizamos el singo de interrogación ? y en este caso en la documentación nos dice que podemos utilziar *limit* para colocar la cantidad de imagenes que queremos que retornen. Debemos modificar la función para obtener cada una de las url en el json y pasarlas al html. Una cambio que hacemos es que habiamos utilizado querySelector para seleccionar la etiqueta de img en el html, pero ahora utilizaremos getElementById ya que vamos a tener varias etiquetas img, con distinto id. Por lo tanto en el html debemos crear también la cantidad de etiquetas de imagen que vamos a solicitar. 

### Status Code

Es la forma en como HTTP nos dice que paso con nuestra solicitud, con valores desde los 1xx al 5xx.  

### API Key

Es una de las formas en que el backend puede identificar quien esta haciendo cada solicitud. Para entender mejor debemos saber que es la autenticación y la autorización.  
**Autenticación** es identificar quien es cada quien, no sabe que puede o no hacer alguien, solo se dedica a identificar a alguien. 
**Autorización** es la que nos dice que permisos tiene cada uno. 
Estos trabajan en conjunto para permitir o denegar el acceso a la informacion. Las API Key entonces son una de las formas de identificar quien es cada uno. 

Para poder enviar una API Key en cada solicitud que hagamos al backend, podemos utilizar varias formas:
* query parameter
* authorization header: una forma un poco mas comoda de enviar nuestra API Key

Las API Key no son la unica forma de identificar tambien existen:
* Authorization: Basic
* Authorization: Bearer token
* OAuth 2.0
* Access KEY + Secret KEY

Tener en cuenta que en este caso estamos utilizando **Application-based authentication** es decir estamos autenticando nuestra aplicacion, o sea estamos autenticando al frontend para que pueda hacer solicitudes al backend. Pero hay aplicaciones en las que tambien necesitamos **User-based authentication**. Esto significa que si no le damos la misma informacion a todos los usuarios en nuestro frontend, debemos de especificar de alguna manera quien recibe que informacion. Solo veremos la primera forma de autenticar. 

En la documentacion de la API que estamos consultando vemos que nos muestra como podemos enviar las solicitudes con API keys. Para obtener la API Keys debemos registrarnos en la pagina inicial. 

## Maquetación

Vamos a modificar nuestro HTML para poder tener una sección en la cual guardar nuestras fotos preferidas y otra en la cual poder subir fotos. 

## Métodos HTTP

Es la forma en como el frontend le dice al backend el tipo de solicitud que vamos a realizar. Los mas comunes: 
* GET: Es el que utilizamos hasta ahora, y al ser el mas comun, fetch no nos pide colocarlo. 
* POST
* PUT
* PATCH
* DELETE

Para poder implementar el guardar fotos en una seccion de favoritos, vemos que en la documentacion nos muestra como podemos hacer solicitudes a un endpoint en particular. Tambien nos aclara que debemos de contar con una APY Key, si hacemos el llamado sin ella y hacemos un console.log vemos que nos aparece un error. 

Vamos a construir una etiqueta **span** en el html, para que si existe algun error lo puedamos visualizar alli. Dentro de la funcion getRandomDog colocamos un if para que si existe algun error (y esto lo hacemos consultando el status code de la respuesta, que sea diferente a 200) lo enviamos como valor del span. Colocamos una url sin la API Key para utilizarla en la funcion de favoritos, asi observamos como se despliega el error en el HTML.

## POST

Vamos a utilizar este metodo para llamar una API que lo que hace es guardar una foto como favorita. 

Cuando llamamos a **fetch** y queremos utilizar un metodo distinto a GET, por ejemplo POST debemos de pasarlo como segundo argumento de fetch (el primero es la url). 

Además debemos enviar **headers y body**.

El body lleva la información que solicita la API, en este caso el id de la imagen. Esta información no se la podemos enviar como un ojeto de javaScript sino que debemos de hacerlo como un string. Esto es porque, esta información la leera nuestro backend, y si estamos utilizando otro lenguaje de programación debemos de enviarla en formato string, para que la pueda entender. 

El id de la imagen que colocamos en el body la estamos obteniendo al hacer un console.log de la información que recibimos al hacer GET a la URL de favoritos. 

En el html le colocamos el id a los botones que seran los que ejecuten la función de guardar la imagen, y le colocamos también dentro de la etiqueta del html que en **onclick** ejecuta la función. 

## MANIPULANDO EL DOM

En el if de la función cargar favoritos (**getFavouritesDog()**), imprimimos en la etiqueta span si existe un error al hacer el llamado de la función. Pero no estamos utilizando ningun else, que la función entra en él cuando el status code es 200. 

Entonces cuando cargamos la función recibimos un **array**, dentro del cual están las urls, que utilizaremos para poder mostrar las fotos guardadas como favoritas. Por lo tanto debemos recorrer ese array y sacar las urls, utilizando **forEach**. Y luego deberemos manipular el **DOM** para crear las etiquetas que necesitamos según la cantidad de urls que tenemos guardadas como favoritas. 

Para el atributo src dentro de la etiqueta img, obtenemos la url que viene desde data, en cada objeto que nosotros llamamos myDogs. 

Vamos a modificar la función de **saveFavoriteDog()** para que reciba como argumento un **id**, el cual será el valor que viene con la imagen desde la API, que utilizaremos para guardar esa foto como favorita. Borramos el llamado de esta función que haciamos con onclick en cada etiqueta button, ya que lo haremos con js. Por lo tanto debemos de obtener cada boton en la función de **getRandomDog()**.

Entonces ahora podremos llamar a la funcion de guardar en cada uno de los botones, y al igual que hacemos con las imgenes que obtenemos el valor para cada una, vamos a obtener el id que necesitamos para cada una de las llamadas a la función. Debemos utilizar una arrow function para que no se ejecute directamente al recargar la página.

## DELETE

Vamos a crear una función para **sacar (delete)** fotos de favoritos. Para esto precisamos utilzar una url distinta según nos indica la documentación de la API, este endpoint necesita el id de la foto. Por lo tanto este endpoint es dinámico, se modifica por cada una de las urls. Entonces vamos a guardar en una constante una arrow function, que recibe el id, y se lo pasa a la URL. 

El método a utilizar en la función es DELETE. No es necesario enviar información de headers y body, ya que el id lo estamos enviando en la URL. 

Tenemos que agregar esta función a los botones que construimos en el forEach de la función que obtiene los perros favoritos. Colocamos a los botones el método onclick, y envolvemos la función en una arrow function.  

Vamos a colocar el llamado de la función cargar favoritos, cada vez que guardamos una foto favorita. El problema que surge es que duplica todas las fotos, ya que no estamos limpiando la sección de html, por lo que se crean las nuevas etiquetas a continuación de las que ya teniamos. Por lo tanto en la funcion donde obtenemos los favoritos debemos eliminar el contenido antes de hacer el forEach. 

## Headers HTTP

Nos ayudan a que el backend sepa como le estamos enviando la inforamción, en el body. 

Hay muchos tipos:
* content-type
* authorization
* cookies
* location
* etc, etc

## Header de autorización

Vamos a eliminar la api_key que estabamos mandando dentro de la url como query parameter, pero solo para la url de favoritos. Después en la función que enviamos esta URL, colocamos que el metodo es GET, y dentro del headers debemos de colocar **X-API-KEY**, como dice la documentación, y ahí colocamos el valor de la api_key. También agregué este valor en la función de saveFavoriteDog(id) porque estamos utilizando la misma url. 

Si bien es un poco más segura esta forma de enviar la API, no es dificil de violar los headers.

## Content type

Como dijimos es para que el frontend y el backend se pongan de acuerdo en el tipo de contenido que van a hablar. 

Nosotros estamos utilizando application/json pero existen otros:
* applications/xml
* application/zip
* application/x-www-form-urlencoded
También podemos enviar archivos:
* audio/mpeg
* audio/x-ms-wma
* audio/x-wav
* image/gif
* image/jpeg
* application/msword
* etc, etc

## FormData

Vamos a crear una opción para **subir fotos**. Para esto creamos una sección en html con un formulario, donde podremos mediante un input subir una foto. El type del input es **file**. Creamos un boton que al presinoarlo ejecute la función que le llamaremos **uploadPhoto()**, y la creamos en js. 

En nuestra función vamos a utilizar **FormData**, el cual es apropiado para poder obtener los valores que vienen de los formularios en HTML, como este caso. El name que le colocamos a cada uno de los input que tengamos en el fomrulario, será la llave para poder acceder al valor desde **FormData**. 

Para poder subir la imagen la documentación de la API, nos dice que tenemos un endpoint (/images/upload) en el cual debemos usar el método POST. Además nos indica que en el body debe ir un file. 

Al construir el fetch colocamos el metodo 'POST', pero lo más importante es que cambia el content-type siendo en este caso multipart/form-data. Y luego podemos simplemente en el body enviar la instancia de nuestro FormData. En este caso surgia un error 500 cuando colocabamos el content-type, y si funcionaba cuando no lo poniamos. 

