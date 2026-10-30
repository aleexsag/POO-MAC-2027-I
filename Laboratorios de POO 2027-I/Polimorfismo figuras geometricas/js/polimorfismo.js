// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #pi = 3.1416
  #radio

  constructor(radio) {
    super("Circulo") // Llamada al constructor de la clase padre, y como solamente tiene un parámetro, le pasamos el nombre de la figura
    this.#radio = radio
  }

  calcularArea() {
    console.log(this.#pi * this.#radio * this.#radio)
  }

  calcularPerimetro() {
    console.log(2 * this.#pi * this.#radio)
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base
  #altura

  constructor(base, altura) {
    super("Rectangulo")
    this.#base = base
    this.#altura = altura
  }

  calcularArea() {
    console.log(this.#base * this.#altura)
  }

  calcularPerimetro() {
    console.log(2 * (this.#base + this.#altura))
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #base
  #altura
  

  constructor(base, altura) {
    super("TrianguloRectangulo")
    this.#base = base
    this.#altura = altura
  }

  calcularArea() {
    console.log(0.5 * this.#base * this.#altura)
  }

  calcularPerimetro() {
    const hip = Math.sqrt(this.#base * this.#base + this.#altura * this.#altura)
    console.log(this.#base+this.#altura+hip)
  }
}

class Trapecio extends Figura {
  #baseMayor
  #baseMenor
  #altura
  #lado1
  #lado2
  
  constructor(baseMayor, baseMenor, altura, lado1, lado2) {
    super("Trapecio")
    this.#baseMayor = baseMayor
    this.#baseMenor = baseMenor
    this.#altura = altura
    this.#lado1 = lado1
    this.#lado2 = lado2
  }


  calcularArea() {
    console.log(0.5 * (this.#baseMayor + this.#baseMenor) * this.#altura)
  }

  calcularPerimetro() {
    console.log(this.#lado1 + this.#lado2 + this.#baseMayor + this.#baseMenor)
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
const circulo = new Circulo(1)
circulo.calcularArea()

const rectangulo = new Rectangulo(8, 3)
rectangulo.calcularArea()

const trapecio = new Trapecio(10, 6, 4, 5, 5)
trapecio.calcularArea()

const triangulo = new TrianguloRectangulo(3, 4)
triangulo.calcularArea()


// ==========================================
