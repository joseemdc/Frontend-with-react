
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
