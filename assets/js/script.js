// Implementar el Patrón Módulo mediante IIFE,
// función privada que reciba la url del video y el id de la etiqueta iframe para así poder mostrar los videos en el documento HTML

// Se define una variable llamada 'modulo' que se asigna a una función autoinvocada.
let modulo = (function () {

    // Se define una función interna llamada 'functPriv' que toma dos parámetros: 'url' e 'id'.
    function functPriv(url, id) {
      console.log(url); // Imprime la URL en la consola.
      console.log(id); // Imprime el ID en la consola.
      id.setAttribute("src", url); // Llama al método 'setAttribute' del objeto 'id' para establecer un atributo con el valor de 'url'.
    }
  
    // Se devuelve un objeto con un método llamado 'privada', que hace referencia a la función 'functPriv'.
    return {
      privada: functPriv,
    };
  })();
  

// Dato: puedes utilizar la instrucción “setAttribute” para manipular el DOM.
// retorne una función pública que reciba los parámetros (url, id), y realice el llamado a la función interna (privada) para insertar los elementos recibidos

// Se imprime en la consola el contenido de la variable 'modulo'.
console.log("Modulo", modulo);

// Definición de la clase Multimedia.
class Multimedia {
  // Constructor: se inicializa la instancia con una URL.
  constructor(url) {
    // Se declara una variable privada para almacenar la URL.
    let _url = url;
    // Método para obtener la URL privada.
    this.getUrl = function () {
      return _url;
    };
  }
  // Getter para obtener la URL.
  get url() {
    return this.getUrl();
  }

  // Método para establecer el inicio de la multimedia.
  setInicio() {
    // Se define un mensaje para indicar cómo se puede usar este método.
    let mensaje = "Cambia url";
    return mensaje;
  }
}


// Definición de la clase Reproductor que hereda de la clase Multimedia.
class Reproductor extends Multimedia {
    // Constructor que recibe una URL y un ID.
    constructor(url, id) {
      // Llama al constructor de la clase Multimedia con la URL recibida.
      super(url);
      // Se almacena el ID recibido como propiedad del objeto.
      this._id = id;
    }
  
    // Método para iniciar la reproducción multimedia.
    starMultimedia() {
      // Llama al método 'privada' del módulo con la URL y el ID.
      modulo.privada(this.url, this._id);
    }
  
    // Método para establecer el inicio de la multimedia.
    setInicio() {
      // Establece un atributo 'src' en el elemento con el ID proporcionado,
      // utilizando la URL del objeto multimedia.
      this._id.setAttribute("src", `${this.url}`);
    }
  }
  

// Selecciona el elemento del documento con el ID "musica" y lo asigna a la variable 'musica'.
const musica = document.getElementById("musica");

// Crea una nueva instancia de la clase Reproductor.
// El primer argumento es una cadena que contiene la URL del recurso multimedia.
// El segundo argumento es una referencia al elemento 'musica'.
let music = new Reproductor(
  "https://www.youtube.com/embed/lTO7U7SpUFU", musica
);

// https://www.youtube.com/watch?v=V5YOhcAof8I&list=RDV5YOhcAof8I&start_radio=1&rv=V5YOhcAof8I&t=42&ab_channel=DavidDeanBurkhart

// Llama al método 'starMultimedia()' en el objeto 'music'.
// Este método inicia la reproducción del multimedia utilizando la URL y el ID proporcionados durante la creación del objeto.
music.starMultimedia();

// Llama al método 'setInicio()' en el objeto 'music'.
// Este método establece el inicio de la reproducción del multimedia.
music.setInicio();


// Selecciona el elemento del documento con el ID "peliculas" y lo asigna a la variable 'pelicula'.
const pelicula = document.getElementById("peliculas");

// Crea una nueva instancia de la clase Reproductor.
// El primer argumento es una cadena que contiene la URL del recurso multimedia.
// El segundo argumento es una referencia al elemento 'pelicula'.
let peli = new Reproductor(
    "https://www.youtube.com/embed/sBU8ejvW6fM", pelicula
);

// Llama al método 'starMultimedia()' en el objeto 'peli'.
// Este método inicia la reproducción del multimedia utilizando la URL y el ID proporcionados durante la creación del objeto.
peli.starMultimedia();

// Llama al método 'setInicio()' en el objeto 'peli'.
// Este método establece el inicio de la reproducción del multimedia.
peli.setInicio();



// Selecciona el elemento del documento con el ID "series" y lo asigna a la variable 'series'.
const series = document.getElementById("series");

// Crea una nueva instancia de la clase Reproductor.
// El primer argumento es una cadena que contiene la URL del recurso multimedia.
// El segundo argumento es una referencia al elemento 'series'.
let serie = new Reproductor("https://www.youtube.com/embed/uPOONJlXRr4", series);

// Llama al método 'starMultimedia()' en el objeto 'serie'.
// Este método inicia la reproducción del multimedia utilizando la URL y el ID proporcionados durante la creación del objeto.
serie.starMultimedia();

// Llama al método 'setInicio()' en el objeto 'serie'.
// Este método establece el inicio de la reproducción del multimedia.
serie.setInicio();
