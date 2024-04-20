
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
