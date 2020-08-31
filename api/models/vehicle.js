class Vehicle {
  #attributes = [
    "id",
    "modelo",
    "anoModelo",
    "anoFabricacao",
    "marca",
    "fipe",
    "placa"
  ];

  constructor(obj) {
    for( let attr of this.#attributes ){
      this[attr] = obj[attr];
    }
  }
}

module.exports = Vehicle;
