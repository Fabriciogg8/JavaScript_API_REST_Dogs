# JavaScript API REST Dogs

<a name="top"></a>

## [English](#item1)
## [Spanish](#item2)

 
<a name="item1"></a>

### English
 
#### Used technology: JAVASCRIPT, HTML, CSS

##### Abstract

In this repository, I use a REST API to get images of dogs. You can save the image that you like the most, creating a collection. If you don't want to keep the image in favorites, you can delete it. You can also upload an image of your choice. Anytime you want, you can call the API to get new images.

# API REST with JavaScript

Interface: It is an abstraction layer, created for two systems to communicate. For example a keyboard that allows us to interact humans with the computer.

API (Application Programming Interface): is an abstraction layer created for two robots to communicate.

REST (representational state transfer): is the means to communicate robots through HTTP, that is, the Internet. The format in which they communicate is JSON, in this way the data is received.

Users must consult the web pages and receive the information they are looking for. But they don't do it directly with the backend. Rather, the frontend receives user interaction, and we translate that into backend queries. Then the backend that does contain the information sends it to the frontend, so that it can be displayed to the users.

## IMPLEMENTATION

If we enter the search "github public apis" in google we can go to github and see a repository where the APIs are classified in an index.We see that there are 3 columns, to start we should choose an API with CORS that is NO, later we will understand what it means. AUTH is the authentication method, to start we should have an API without a method or one that tells us apiKey. In this case we choose "https://thedogapi.com/".

We enter in the documentation and we have the url that we must use "https://api.thedogapi.com/v1/images/search".

We create the file index.html and main.js. In the html file we create an img tag that will be where we will see the images of the dogs in this case. But we remove the src attribute, which is where the url should be.

With fetch we make a call to the url, and then we can pass the response as the value of the image src.

I then made another way to fetch the API call with async await. Also add the function to run when we load the page by placing an addEventListener to the DOM. Finally, place that when the button is clicked, the function is also executed to change the images.

### Endpoints y Query parameters

They are another way in which we can modify the result that our Rest API will give us. An API can have different routes and that is what **endpoints** are. That is why the APIs segment your information so that we do not have to make a request to the entire database in each request, but to the part that we want to obtain. For this, seeing the documentation of the API that we are consuming is important to see the different routes that we can use.

There are also the **query parameters** that are extra information to the enpoints, to limit or specify much better what is the content that we want to request from our API, that is, from our backend. For example, in the endpoint we could ask to fetch the categories but with the query parameter we could add that fetch only the categories that begin with a certain letter, or a limited number of categories, etc.

We are going to modify the main.js file so that we can implement the endpoints and query parameters in our getDog() function. In order to add the query parameter we use the question mark ? and in this case the documentation tells us that we can use *limit* to set the number of images we want to return. We must modify the function to get each of the urls in the json and pass them to the html.

One change we make is that we had used querySelector to select the img tag in the html, but now we will use getElementById since we are going to have multiple img tags, with different ids. Therefore, in the html we must also create the number of image tags that we are going to request.

### Status Code

It's how HTTP tells us what happened with our request, with values ​​from 1xx to 5xx.

### API Key

It is one of the ways the backend can identify who is making each request. To better understand we must know what authentication and authorization is.
**Authentication** is to identify who each person is, they do not know what someone can or cannot do, they are only dedicated to identifying someone.
**Authorization** is what tells us what permissions each one has.
These work together to allow or deny access to information. The API Key then are one of the ways to identify who each one is.

In order to send an API Key in each request we make to the backend, we can use several ways:
* query parameter
* authorization header: a slightly more comfortable way to send our API Key

API Keys are not the only way to identify, they also exist:
* Authorization: Basic
* Authorization: Bearer token
* OAuth 2.0
* Access KEY + Secret KEY

Keep in mind that in this case we are using **Application-based authentication**, that is, we are authenticating our application, that is, we are authenticating the frontend so that it can make requests to the backend. But there are applications where we also need **User-based authentication**. This means that if we don't give the same information to all users in our frontend, we must somehow specify who receives what information. We will only see the first way to authenticate.

In the documentation of the API that we are consulting, we see that it shows us how we can send the requests with API keys. To obtain the API Keys we must register on the home page.

## Layout

We are going to modify our HTML to be able to have a section in which to save our favorite photos and another in which to upload photos.

## HTTP Methods

It is the way in which the frontend tells the backend the type of request that we are going to make. The most common:
* GET: It is the one we use until now, and being the most common, fetch does not ask us to place it.
* POST
* PUT
* PATCH
* DELETE

In order to implement saving photos in a favorites section, we see that the documentation shows us how we can make requests to a particular endpoint. It also clarifies that we must have an APY Key, if we make the call without it and do a console.log we see that an error appears.

We are going to build a **span** tag in the html, so that if there is an error we can see it there. Inside the getRandomDog function we place an if so that if there is an error (and we do this by consulting the status code of the response, which is different from 200) we send it as a span value. We place a url without the API Key to use it in the favorites function, so we can see how the error is displayed in the HTML.

## POST

We are going to use this method to call an API that saves a photo as a favorite.

When we call **fetch** and we want to use a method other than GET, for example POST, we must pass it as the second argument to fetch (the first is the url).

We must also send **headers and body**.

The body carries the information requested by the API, in this case the id of the image. We cannot send this information as a JavaScript object, but we must do it as a string. This is because this information will be read by our backend, and if we are using another programming language we must send it in string format, so that it can be understood.

We are obtaining the id of the image that we place in the body by making a console.log of the information that we receive when doing GET to the favorites URL.

In the html we place the id to the buttons that will be the ones that execute the function of saving the image, and we also place it inside the html tag that in **onclick** executes the function.

## DOM MANIPULATION

In the if of the load favorites function (**getFavouritesDog()**), we print in the span tag if there is an error when calling the function. But we are not using any else, that the function enters it when the status code is 200.

So when we load the function we receive an **array**, inside which are the urls, which we will use to be able to show the photos saved as favorites. Therefore we must loop through that array and retrieve the urls, using **forEach**. And then we will have to manipulate the **DOM** to create the labels that we need according to the number of urls that we have saved as favorites.

For the src attribute inside the img tag, we get the url that comes from data, on each object that we call myDogs.

We are going to modify the **saveFavoriteDog()** function so that it receives an **id** as an argument, which will be the value that comes with the image from the API, which we will use to save that photo as a favorite. We delete the call of this function that we did with onclick in each button tag, since we will do it with js. Therefore we must get each button in the **getRandomDog()** function.

So now we can call the save function on each of the buttons, and just like we do with the images we get the value for each one, we're going to get the id we need for each of the function calls. We must use an arrow function so that it is not executed directly when reloading the page.

## DELETE

Let's create a function to **delete** photos from favorites. For this we need to use a different url as indicated by the API documentation, this endpoint needs the id of the photo. Therefore this endpoint is dynamic, it is modified by each one of the urls. So we're going to store an arrow function in a constant, which receives the id, and passes it to the URL.

The method to use in the function is DELETE. It is not necessary to send header and body information, since we are sending the id in the URL.

We have to add this function to the buttons we build in the forEach of the function that gets the favorite dogs. We give the buttons the onclick method, and wrap the function in an arrow function.

We are going to place the call of the load favorites function, every time we save a favorite photo. The problem that arises is that it duplicates all the photos, since we are not cleaning the html section, so the new tags are created after the ones we already had. Therefore, in the function where we obtain the favorites, we must eliminate the content before doing the forEach.

## HTTP Headers

They help us to let the backend know how we are sending the information, in the body.

There are many types:
* content-type
* authorization
* cookies
* location
* etc, etc

## Authorization header

We are going to eliminate the api_key that we were sending inside the url as a query parameter, but only for the favorites url. Then in the function that we send this URL, we put that the method is GET, and inside the headers we must put **X-API-KEY**, as the documentation says, and there we put the value of the api_key. I also added this value in the saveFavoriteDog(id) function because we are using the same url.

While this way of sending the API is a little more secure, it is not difficult to break the headers.

## Content-type

As we said, it is so that the frontend and the backend agree on the type of content that they are going to speak.

We are using application/json but there are others:
* applications/xml
* application/zip
* application/x-www-form-urlencoded
We can also send files:
* audio/mpeg
* audio/x-ms-wma
* audio/x-wav
* image/gif
* image/jpeg
* application/msword
* etc, etc

## FormData

Let's create an option to **upload photos**. For this we create a section in html with a form, where we can upload a photo through an input. The type of the input is **file**. We create a button that, when pressed, executes the function that we will call **uploadPhoto()**, and we create it in js.

In our function we are going to use **FormData**, which is appropriate to be able to obtain the values ​​that come from the forms in HTML, as in this case. The name that we place on each of the inputs that we have in the form will be the key to be able to access the value from **FormData**.

In order to upload the image, the API documentation tells us that we have an endpoint (/images/upload) in which we must use the POST method. It also tells us that a file must go in the body.

When building the fetch we put the 'POST' method, but the most important thing is that it changes the content-type being in this case multipart/form-data. And then we can just in the body send the instance of our FormData. In this case, a 500 error arose when we put the content-type, and it worked when we didn't put it.

[Go up](#top)

<a name="item2"></a>

### Spanish
 
#### Tecnologías utilizadas: JAVASCRIPT, HTML, CSS

##### Resumen

En este repositorio, uso una API REST para obtener imágenes de perros. Puedes guardar la imagen que más te guste, creando una colección.
Si no desea mantener la imagen en favoritos, puede eliminarla. También puede cargar una imagen de su elección. Cada vez que lo desee, puede llamar a la API para obtener nuevas imágenes.

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

[Subir](#top)