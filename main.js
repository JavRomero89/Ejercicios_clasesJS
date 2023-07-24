class Animal {
    constructor(nombre, edad, color, piernas) {
      this.nombre = nombre;
      this.edad = edad;
      this.color = color;
      this.piernas = piernas;
    }
    emitirSonido(sonido) {
        return `${this.nombre} dice: ${sonido}`;
      }
    }
      const miAnimal = new Animal('Peluchin', 6, 'marrón', 3);
      console.log(miAnimal.emitirSonido('¡Guau!'));

///////////////////////////////////////////////////////////

      class Perro extends Animal {
        constructor (nombre,edad,color,piernas){
            this.nombre=nombre;
            
        }
      }