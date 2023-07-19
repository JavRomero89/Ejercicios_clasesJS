class Animal {
    constructor(nombre, edad, color, piernas) {
      this.nombre = nombre;
      this.edad = edad;
      this.color = color;
      this.piernas = piernas;
    }
  



























    
    // Método para obtener información básica del animal
    obtenerInformacion() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}, Color: ${this.color}, Piernas: ${this.piernas}`;
    }
  
    // Método para hacer que el animal emita un sonido
    emitirSonido(sonido) {
      return `${this.nombre} dice: ${sonido}`;
    }
  
    // Método para aumentar la edad del animal
    aumentarEdad() {
      this.edad++;
    }
  }
  
  // Ejemplo de uso de la clase Animal
  const miAnimal = new Animal('Max', 3, 'marrón', 4);
  console.log(miAnimal.obtenerInformacion()); // Salida: Nombre: Max, Edad: 3, Color: marrón, Piernas: 4
  console.log(miAnimal.emitirSonido('¡Guau!')); // Salida: Max dice: ¡Guau!
  miAnimal.aumentarEdad();
  console.log(miAnimal.edad); // Salida: 4
  