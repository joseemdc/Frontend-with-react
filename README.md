
# Frontend with react

Carrera de OpenWebinars de desarrollador frontend con React

***(19 de marzo)***

## 1.1 Fundamentos y origen
### Sistemas de diseño
- **Encapsulación:** en React cada componente tendrá su estilo, layout y lógica propios para que pueda ser mejor controlado

- **Atomic design:** he aprendido las bases del diseño atómico, que divide la interfaz en combinaciones de elementos:

| Átomos | Moléculas | Organismos |
| :-------- | :------- | :--- |
| Cada elemento individual | Agrupación de elementos que forman un componente | Conjunto de componentes que forman una sección |

Los organismos se juntan para formar plantillas, que son la base común de todas las páginas que son similares.

Finalmente para asentar lo aprendido, hice el ejercicio propuesto en el curso de identificar cada parte de la interfaz de la página de Google Fonts
- Amarillo: Átomos
- Morado: Moléculas
- Azul: organismos

![Google Fonts screenshot](https://github.com/joseemdc/Frontend-with-react/blob/main/otros/google%20fonts.png?raw=true)
### JavaScript moderno
He aprendido funciones y características nuevas de JavaScript que introdujeron en las últimas versiones y que son útiles para el desarrollo con React.

- El identificador `let` (a parte del `var` que ya existía), si let se declara dentro de un bloque, sólo está disponible dentro de él, sin embargo las variables var están disponibles siempre, es más, el motor js se lleva la instanciación de una variable al principio, dando como lugar que no de error al intentar acceder a una variable que se instacia más adelante (por eso es un problema, así que mejor usar let para mas control).
- Indentificador `const` para variables no mutables, recomendado usar lo máximo posible para un control total.
- Las Arrow Functions que es como se denominan a las expresiones Lambda.
- String literals o String templates: permiten usar una referencia al código dentro de un string con comilla simple 
```JavaScript
  const miVar="mi variable";
  console.log('El valor es ${miVar}');
```
- Destructuración: quizás sea el concepto que de momento me parece más novedoso y difícil de entender al principio pero también es muy extremadamente útil. Permite extraer automáticamente atributos de un objeto por ejemplo, si una función tiene como parámetro algún atributo de un objeto, se le puede pasar el objeto directamente y JavaScript extraerá automáticamente el atributo necesario.
- El concepto de clase con la posibillidad de extender de otra, también es algo reciente y muy utilizado.
- Módulos: para mi, otro de los conceptos mas novedosos y útiles, un módulo está contenido en un archivo JavaScript y se puede acceder a su contenido desde otro módulo, para ello hay que usar la palabra clave `export` y `default`, en el módulo desde el cual queremos acceder a otro debemos hacer un `import`.

### Anatomía de React
- Reconciliación: React hace uso de un virtual DOM para no tener que repintar el DOM cuando se hace algún cambio, lo que sería muy costoso
- Renderización: el DOM virtual traduce a un DOM real si se quiere hacer una web o a través de un motor y gracias a React Native, traducir a componentes nativos de iOS o Android.

### Ecosistema de React

El ecosistema de React puede estar formado por un montón de partes y herramientas, las que voy a usar en este curso son las siguientes:
Librería React + Render (ej. React DOM) + Routing (ej. React Router) + Gestión del estado (ej. Redux) + Formularios (ej. Formik) + Tests (ej. Jest) + Bundling (ej. Parcel) + muchas otras posibilidades y herramientas…

## 1.2 Creamos un proyecto de React
Durante estas sesiones, creé mi primer proyecto de React y instalé todas dependencias, empecé usando NPM que viene incluído con Node.JS pero acabe pasando a utilizar el gestor de dependencias Yarn porque lo recomendaban en el curso, he tenido algunos problemas al hacer el cambio de npm a yarn y algun otro con permisos del sistema, pero al final han quedado solucionados y el proyecto se configuró con éxito.
Para el código inicial he tenido que hacer algun cambio porque con las últimas versiones de React cambia la forma de hacer algunas cosas y los pasos del curso de webinars ya no son los mas actualizados.

## 1.3 Renderizado de componentes en el DOM
He aprendido lo básico de renderizado de componentes aplicando todo lo anterior y he hecho los ejercicios propuestos de crear una aplicación de lista de tareas.

***(1 de abril)***

## 1.4 Comunicación y estado de los componentes
Aprendí el uso de los props para las propiedades de los componentes, si se quieren definir los tipos usaremos la librería de PropTypes
Los estados no pueden ser compartidos por los componentes hermanos al menos que se definan en el padre y se deleguen

## Finalización del primer curso de la carrera y realización de los últimos ejercicios
Finalmente completé la aplicación web para añadir las funcionalidades que faltaban usando todo lo aprendido y siguiendo las explicaciones del curso.
Aprobado el examen al 2º intento

***(8 de abril)***

## 2.1 Comunicación con el servidor

SPA: aplicación de pagina única donde se renderiza por el cliente en JavaScript.

AJAX: conjunto de tecnologías que sustenta las SPA.

Las peticiones se hacen con XMLHttpRequest o con la mas reciente API de Fetch

Las peticiones mas usadas son `POST` y `GET`

Las `GET` tienen dirección, cabeceras y parámetros mientras que las `POST` también tienen body

Las peticiones Fetch están compuestas por un objeto init con unas cabeceras Headers y devuelven respuesta en formato Response

Un Modelo de Front es una respresentacion abstracta de la entidad de backend

Un servicio front consume información del backend y simplifica el proceso de consumo del servidor

Los modelos de Front-end no tienen por que coincidir con los de Backend

Un interceptor es una función que procesa la respuesta o el envio de una peticion

*Creación de otra aplicación de react para este curso intermedio mediante create-react-app de forma sencilla*

***(14 de abril)***

## 2.2 Rutas, navegación y portables

En un enrutamiento para una aplicacion de una sola página simple (SPA) el router es un "falso enrutador" ya que realmente no produce la recarga de la página.

El enrutador actúa como un switch que muestra el componente correspondiente de la página.

El enrutador más usado y recomendado por el propio equipo de React es React Router.

La navegación básica la podremos hacer mediante la etiqueta `Link to` o `NavLink`, pueden tener las propiedades pathname, search, hash y state.

Como resumen la navecación en una aplicación web está formada por:
- Enrutamiento: mostrar u ocultar rutas
- Navegación: mandar y recibir parámetros, search y hash
- Gestión del historial: que permite volver a un punto y gestionar el registro de navegación

Para usar el historial de nabegación usaremos la API HTML5 History de la cual React Router implementa una versión propia

***(14 de abril)***

Los portales nos permiten crear un acceso a un componente superior y mandar el contenido de un contenido inferior a ese acceso, de esta forma podemos mantener la jerarquía "en cascada" de react
Se comportan como un hijo más en React y se usan en casos como modales, diálogos, tooltips, etc..

## 2.2 Abstracción de funcionalidades 

Componentes de alto orden o nivel (HOC)-> están basados en las funciones de alto orden, consisten en un componente que devuelve otro componente

High order functions (HOF)-> funcion que recibe una funcion A y una B y ejecuta sus partes comunes y luego las diferentes por separado

Los HOC-> sirven para gestionar las preocupaciones transversales (partes comunes que ejecutan distintos componentes) como por ejemplo el loading o la autenticación

Importante nunca mutar un componente

Las render props tienen como objetivo desligar la lógica de un componente de su representación visual mejorando la reusabilidad

También solucionan las preocupaciones transversales y se complementan conlos HOCs

React Hooks-> hasta ahora solo podia controlar el ciclo de vida de un componente si este era un componente de clase, pero gracias a React Hook podemos usarlo con estados en los componentes funcionales

Tenemos los Hook de estado para gestionar el estado del componente

El hook de efecto recibe una funcion que se ejecuta si se cumple la condición después de cada renderización

El hook de contexto permite usar el contexto de React sin necesitar un componente de Clase

## 2.2 Gestión del estado

Cascada de props-> significa que el paso del estado de un componente a otro se realiza verticalmente y hacia abajo por "cascada"

Se puede "subir" el estado hacia arriba mediante Callbacks pero puede llegar a complicarse mucho

Podemos usar distintas soluciones para centralizar el estado como por ejemplo con localStorage o con Redux o Flux

Redux almacena el estado de forma global y de solo lectura

El hook useReducer nos permite implementar nativamente en la librería patrones de f¡gestión del estado como Redux

Recomendaciones:
- Favorecer la cascada siguiendo la jerarquía y evitar el uso de callback para subir el estado
- Mantener los componentes puros (que la renderizacion solo dependa de las propiedades)
- Centralizar si es necesario(no necesario en proyectos pequeños si se realizan buenas prácticas como las anteriores)

## Finalizado el curso intermedio y realizado primer intento del examen obteniendo un 70% de la puntuación

***(18 de abril)***

## Aprobado el examen del curso intermedio al 2º intento

## 3.1 Desarrollo con Hooks

La motivación para usarlos es que nos permiten usar el estado en componentes funcionales, además:

- Los componentes de clase complejos suelen ser difíciles de entender
- El uso de `this` funciona de forma distinta  en JavaScript que en otros lenguajes, se quiere huir de su uso
- Es mas recomendado por el equipo de React

Los hooks permiten funcionalidades como el estado, gestión de efectos secundarios y acceso a los contextos existentes de React.

Aprovechan el concepto de hoisting y closre para crear contextos en donde puedan existir y mantener sus valores entre ejecuciones.

***(20 de abril)***

Manejo del estado con Hooks:

Con el hook useState
```JavaScript
  const [counter, setCounter] = useState(0);
```
En este caso counter es la variable de estado, setCounter la función para establecerlo y 0 el valor inicial

Con el hook useReducer
```JavaScript
  const [state, dispatch] = useReducer(reducer, initialState);
```
Se usa reductor, dispatch lanza funciones que modifican el estado, no lo modificas tú directamente por lo que su manipulación es algo más compleja que con useState

Ciclo de vida con Hooks:

Hook de efecto-> ejecuta la función dada cuando se cumple una condición en un array de condiciones, esto es, cuando una de las variables de estado de ese array cambia.

Puede usarse para imitar al componentDidMount poniendo el array de condiciones vacío.

Puede usarse para imitar al componentDidUpdate no especificando ningún array.

Puede usarse para imitar al componentWillUnmount devolviendo solo una función.

Hay una variación, el useLayoutEffect, la diferencia es que useEffect se ejecuta despues del render, en vez de a la vez que el renderizado del DOM, con lo que si dentro del Hook modificas el DOM puede traer problemas, en este caso es cuando usamos useLayoutEffect cuyo uso es idéntico, solo cambia el momento de su ejecución

Contruyendo mis propios Hooks:

Podemos extraer el hook de un componente si queremos que sea comun a otros, debe empezar SIEMPRE con use, se define como un componente pero sin el método Render. Para usarlo simplemente tenemos que llamarlo desde el componente, reduciendo así  la complejidad dentro del componente.

## 3.2 Gestión del estado con Redux

En Redux todo el estado de la app se encuentra en una única fuente llamada store o almacén.

El estado en Redux es de sólo lectura y cambiarlo depende de seguir el flujo interno.

Los cambios de estado se realizan con funciones puras que devuelven un nuevo estado de la aplicación.

IMPORTANTE: Redux es un patrón, puede implementarse de forma manual o utilizar implementaciones como la librería de react-redux

Selectores de porciones de redux:

Configurar el Store, en un archivo store.js exportamos la funcion configureStore, la store consta de un único reducer.

Usamos las porciones para una mayor separación conceptual, es como un conjunto de reductores con una funcionalidad específica.

Conectarse al estado solo depende de useSelector para leerlo y useDispatch para lanzar los reductores y crear acciones.


Middlewares y debug del store:

Un middleware es un código que se ejecuta entre una solicitud y la respuesta

En el caso de Redux, su objetivo es permitir registrar en el log las acciones y los cambios de estado para facilitar el debugging

Acciones asíncronas con Redux Thunk:

Un thunk es una función que es devuelta por una HOC, función de orden superior y se usan para resolver la asincronicidad.
Tenemos la librería redux-thunk

## 3.3 Fiabilidad y tests

Gestión de errores en los componentes:

Errores habituales: el "componente dios" que consiste en aglutinar diferentes funcionalidades separadas en un mismo componenete es un agran fuente de errpres, mutar el estado ya sea accidental o a propósito, tratar en cierto momento los cambios de estado como síncronos.

Para evitar que en React los errores se extendiese por todo el árbol se introducen los Error Boundaries o limitadores de errores, funcionan como un bloque try-catch sobre un componente
<ErrorBoundary>
  <MiComponente />
</ErrorBoundary>

Modo estricto de React:

Es una herramienta para destacar problemas potenciales, no produce renderización por pantalla.

Introducción  Jest:

Jest es un framework para realizar tests y pruebas sobre código javascript y Typescript que ejecuta los tests en paralelo.

Se usa creando archivos .test.js.

Su uso me ha parecido muy sencillo y similar al de JUnit que dimos con Java.


Testeando el DOM generado por React:

Usamos la librería de apoyo React test utils, permite usar pruebas que usen los componentes de la misma forma en la que lo harían los usuarios finales, se recomienda usarlo junto con Jest.

Permite simular clicks en cualquier componente y muchas otras acciones.

## 3.4 Potenciando el rendimiento

Por defecto React siempre devuelve un true en shouldComponentUpdate por lo que comparará las versiones del componente para intentar renderizarlo otra vez, aunque no llegue a renderizarlo otra vez, el hecho de que devuelva un true y tenga que ponerse a comparar ya afecta al rendimiento de la aplicación

Virtualizar listas: para no tener que hacer comparaciones con listas enormes (cosa que en la mayoría de frameworks Javascript es una tarea muy pesada) se virtualiza la parte que se está usando para no tener que trabajar con las listas enteras. 

Memoización: técnica que almacena en caché el resultado de una función a ser devuelto si los parámetros no han cambiado, de esta manera la primera llamada es un poco mas lenta pero las siguientes son casi instantáneas.

Se puede memoizar un componente mediante React.memo y los hooks useCallback y useMemo que se aplicarán a las funciones del componente a las que envuelvan.

Code-splitting y tree-shaking:

Al crear una version de producción se creará una version optimizada para el despliegue que tendrá un tamaño que será el que tendrá que descargar el usuario al usar la app.

Reducir este tamaño del bundle aumenta la velocidad de carga e incrementa su disponibilidad.

Para reducirlo podemos usar:

- Code-splitting: corta el bundle en pequeños fragmentos que se cargan cuando son necesarios, el tamaño total es el mismo pero el tiempo de carga es menor por sección. Con React.lazy podemos hacer imports de forma dinámica.

- Tree-shaking: eliminación de código muerto a la hora de crear el bundle.

Renderizado concurrente: 

En este modo el renderizado es interrumpible lo que permite procesar nuevas actualizaciones antes de que acaben las anteriores y mostrar frames antes de que acabe el renderizado completo.

Actualmente es una feature muy nueva y que aun tiene una baja adopción.

En el momento de la creación de este curso aún era una feature experimental por lo que no incluye una explicación sobre su uso pero su llegada cambió cosas de las que se han explicado en cursos anteriores.

## Finalizado el curso avanzado y aprobado el examen al primer intento

***(22 de abril)***

## Realizado el siguiente curso de la carrera que es un taller sobre los Hooks de React, lo he realizado en la aplicación que creé en el cruso de react intermedio, todo el código nuevo está dentro del archivo App.js, queda finalizado este taller

***(24 de abril)***

## Inicio del curso de manejo de estado con Clases y Hooks en React

## 4.1 Introducción

  Tipos de estado que podemos encontrar en nuestra App:
  
  - Modelo de nuestra App
  - Estado de las peticiones HTTP
  - Estado de sesión (cookies)
  - Estado de UI (input de usuario, estado de componentes)

React controla el estado de la IU y de las peticiones HTTP relacionadas con la interfaz (mostrar un loading)

Tipos de cambios en la App:

-Activos: producidos directamente por el usuario (apretar un boton)
-Pasivos: producidos por otro elemento (la respuesta de una petición a un servidor)

Props vd State: Cuando un dato debe ser uno o otro?

| Pregunta | Respuesta | ¿Debe ser State? |
| :-------- | :------- | :--- |
| ¿Voy a usar el dato en el render? | No | No |
| ¿Puede ser recalculado por Props? | Si | No |


### Realizada la práctica sobre los tipos de estado en la nueva carpeta de este curso "Manejo de estado con Clases y Hooks"

Diferencias entre Clases y componentes funcionales:

Ventajas de los componentes de Clase:
- Unica forma de gestionar estado en React v16.8 o inferior
- Sintaxis conocida para proramadores de otros lenguajes
- Las clases tienen una pequeña optimización en la mayoría de navegadores
- Si estas familiarizado a modelar aplicaciones con herencia, este enfoque puede ser más recomendable

 Desventajas de los componentes de Clase:
- Son azúcar sintactico, simulan ser Clases pero en realidad en JavaScript las Clases no existen tal y como las conocemos en otros lenguajes
- Introducen problemas con los contextos y obliga a estar bindeando el contexto a muchas funciones
- Su sintaxis es más larga y compleja
- Dificiles de entender para programadores Junior

  Ventajas de los componentes Funcionales
  -Sintaxis muy limpia
  -Van acorde con la filosofía de Javascript
  -Favorecen la composición en React
  -No hay problemas con el This
  -Encapsulación
  -Podemos tener funciones puras
  -No necesitan "construirse" para devolver un nuevo objeto
  Desventajas de los componentes Funcionales
  -No pueden gestionar el estado en React v16.8 o inferior
  -Obligan a pensar con un enfoque de composición en lugar de herencia
  -Hay que entender bien los closures en Javascript

Composición o herencia?:

La herencia no existe como tal en Javascript, si que existe la "delegación" que no es lo mismo pero es similar

En general no es mala la herencia pero es mas recomendable la composicion en el caso de Javascript

***(29 de abril)***

## 4.2 Gestión de estado con Clases

Uso básico del setState (repaso), he estado revisando el código que proporcionan en el repositiorio oficial de este curso para ver todos los ejemplos de uso que explica

Para las pruebas usa la aplicación de contador que ya he realizado anteriormente.

En las 3 primeras clases del segundo punto realiza ejemplos para entender lo que explica anteriormente.

***(4 y 5 de mayo)***

Continuación con los usos de setEstate mejor explicados con ejemplos, quizás lo más importante a tener en cuenta de lo que he visto estos días es la asincronía del setEstate, no siempre se ejecuta una actualización de estado cuando se llama a la función que lo hace, React decide cuando hacerlo, asique llamar varias veces a setEstate dependiendo del valor anterior no funcionará, será como ejecutarlo 1 vez sola. Pero esto solo ocurre si se llama a setEstate con un objeto, si se llama con una función, si se puede utilizar varias veces seguidas, se comporta como si fuese "síncrono" aunque en realidad no lo sea

Podemos hacer operaciones justo después de actualizar el estado, para eso hay que llamar a setEstate pasándole tambien una función Calllback que devolverá siempre el estado actualizado

Para terminar, un resumen de todos lo que he visto en todas las clases de este punto del curso relacionado con setEstate:

- setEstate con objeto -> no se debe encadenar llamadas ya que puede causar resultados inesperados por la asincronía
- setEstate con función -> se pueden encadenar llamadas ya que react va a componerlas, ganamos desacople, pureza y validación
- setEstate con función y props -> se pueden encadenar llamadas, ganamos desacople, pureza y validación y podemos hacer validación por props sin perder el desacople
- setEstate con callback -> nos permite realizar operaciones después de acualizar el estado

### Realizado el ejercicio con LocalStorage, dado que esra una solución muy simple no he replicado la aplicación entera para probarlo, simplemente he añadido los métodos que faltaban al código que me proporcionaron

## 4.3 Gestión de estado con Hooks

Al igual que en el apartado anterior empieza siendo un repaso pero más a fondo de los Hooks de los que ya he hablado varias veces en cursos anteriores, las cosas que sean de repaso ya no las pondré aquí para no repetir, pongo solo lo nuevo.

PARA MIGRAR DE COMPONENTES DE CLASE A FUNCIONALES:
-Hay que tener en cuenta que el estado deja de ser un objeto único a ser un hook o estado por cada variable de estado.
- En hooks recibimos un valor y devolvemos un valor, al contrario que en las clases que trabajabamos con un objeto
- Aqui no existe la version del setter con props.
- El setState también es asíncrono y la forma de esquivarlo es exactamente la misma-

En cuanto a los Hook Effects:
Nada nuevo, el funcionamiento no cambia, simplemente recordar los usos:
- useEffect sin dependencias -> se ejecuta cada vez que se produzca una actualización de estado (después de cada render)
- useEffect con array vacío -> se ejecutará solo después del primer render (componentDidMount)
- useEffect con una dependencia -> si esa dependencia cambia, se ejecuta el effect

  OJO: no actualizar estado ni dependencia dentro del propio effect o se entrará en un bucle (en los casos 1 y 3)

### Realizado el ejercicio con LocalStorage y useEffect, dado que esra una solución muy simple no he replicado la aplicación entera para probarlo, simplemente he añadido los métodos que faltaban al código que me proporcionaron

Como normal general, si un valor del componente se usa dentro del effect, debe de estar en el array de dependencias

Como recordar el estado (acceder al estado del ultimo render y no al actual):
Usaremos el hook useRef, nos permite recordar el estado entre renders.

## 4.4 Custom Hooks

También empieza repasando lo que ya se ha explicado en cursos anteriores.

### Realizado el ejercicio con LocalStorage y un custom Hook, dado que esra una solución muy simple no he replicado la aplicación entera para probarlo, simplemente he añadido los métodos que faltaban al código que me proporcionaron

Para poder testear mis custom Hooks de la formas mas facil, deben de ser lo más desacoplados posibles.
Habria que usar la librería tesing-library

## Finalizado el curso  y realizado primer intento del examen obteniendo un 60% de la puntuación


***(6 de mayo)***

## Inicio del curso de manejo de estado y data fetching con Reducers y Thunks en React

## 5.1 Introducción

Arquitectura Flux: es la arquitectura definida por Facebook para crear sus aplicaciones. Redux es una implementación de Flux.
Sus beneficios son:
-Vistas deterministas
-Reproducción de estado determinista
Esto significa que dado un mismo estado siempre genera la misma vista.

Elemenos que no son deterministas y que se aislan gracias a esta arquitectura: User inputs y Network I/O.

## 5.2 Reducers

La utilidad de reduce nos permite en programación aplicar una función a cada uno de los elementos de una lista con el ebjetivo de acumular un valor (reducir una lista a un valor).

En flux el reducer se aplica sobre un stream de actions

useState vs useReducer:

useState tiene como desventajas la complejidad (si hay muchos) y es dificil separar mi lógica de la actualización del estado.

useReducer permite gestionar el estado con un reducer, al ser una función la podemos separar de nuestra aplicación

Actions: es cualquier evento que se produzca en nuestra aplicación y genere un cambio de estado. Es un objeto con un type y un payload.

Para crear acciones usamos los Action creators, una funcion que recibe un payload y establece el tipo.

Selectors: es una  función que toma un estado y devuelve una visualización del mismo.

Testing de reducers: como son simples funciones puras, es fácil hacer realizar tests unitarios sobre ellos.

Context: nos ofrece una forma de poder compartir una prop entre componentes sin necesidad de tener que ir pasándola en cascada a todos nuestros componentes, se crea con createContext y se usa con useContext. Ya que su uso esp oder compartir nuestro estado por todos los componentes, uno de los usos mas habituales es el theme (si es dark mode o no)

React.memo y useCallback :
Se usan para mejorar el rendimiento, indicandole a react cuando no es necesario renderizar algo.

React.memo recibe un componente y unas dependencias y devuelve un componente memorizado, mientras esas dependencias no cambien, el componente no se renderizará de nuevo.

useCallback recibe una funcion y unas dependencias, mientras estas no cambien, la referencia de esta función será la misma.

## Realizado el ejercicio propuesto en la plantilla que mandan descargar del repositorio ##

## 5.3 Data Fetching

Nos referimos a traer datos de una fuente externa (servidor, localstorage...)

El fetching lo hacemos en el useEffect y con sus propios metodos podemos hacer catch de los errores, sus uso en general es bastante simple

## Finalizada esta sección, cosas pendientes para esta úlima semana -> 
- Acabar la última sección de este curso (45min)
- Aprobar el examen de este curso y del anterior del cual ya realicé el primer intento
- Realizar las 2 p´racticas restantes equivalentes a los 2 cursos restantes de la carrera (1h y 30min)
