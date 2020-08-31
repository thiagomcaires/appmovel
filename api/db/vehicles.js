const Vehicle = require('../models/vehicle');

let Vehicles = {
  array: [
    (new Vehicle({id:  '1', modelo: 'Towner Truck',                            anoModelo: '1996 Gasolina', anoFabricacao: '1996', marca: 'Asia Motors',    fipe: '007007-6', placa: 'ABC-1234'})),
    (new Vehicle({id:  '2', modelo: 'Accent LS 4p',                            anoModelo: '1995 Gasolina', anoFabricacao: '1995', marca: 'Hyundai',        fipe: '015004-5', placa: 'DEF-5678'})),
    (new Vehicle({id:  '3', modelo: '405 STi',                                 anoModelo: '1994 Gasolina', anoFabricacao: '1994', marca: 'Peugeot',        fipe: '024014-1', placa: 'GHI-9101'})),
    (new Vehicle({id:  '4', modelo: 'Caravan Comodoro 4.1/2.5',                anoModelo: '1988 Gasolina', anoFabricacao: '1988', marca: 'GM - Chevrolet', fipe: '004027-4', placa: 'JKL-1121'})),
    (new Vehicle({id:  '5', modelo: 'EcoSport SE Direct 1.6 16V Flex 5p Aut.', anoModelo: '2017 Gasolina', anoFabricacao: '2017', marca: 'Ford',           fipe: '003427-4', placa: 'MNO-3141'})),
    (new Vehicle({id:  '6', modelo: 'ARGO DRIVE 1.3 8V Flex',                  anoModelo: '2020 Gasolina', anoFabricacao: '2020', marca: 'Fiat',           fipe: '001493-1', placa: 'PQR-5161'})),
    (new Vehicle({id:  '7', modelo: 'PORTOFINO 3.9 V8 600cv',                  anoModelo: '2019 Gasolina', anoFabricacao: '2019', marca: 'Ferrari',        fipe: '031044-1', placa: 'STU-7181'})),
    (new Vehicle({id:  '8', modelo: '180-D Van 2.4 Diesel',                    anoModelo: '1995 Diesel',   anoFabricacao: '1995', marca: 'Mercedes-Benz',  fipe: '021061-7', placa: 'VXW-9202'})),
    (new Vehicle({id:  '9', modelo: 'Clio Hi-Flex 1.0 16V 5p',                 anoModelo: '2012 Gasolina', anoFabricacao: '2012', marca: 'Renault',        fipe: '025170-4', placa: 'YZA-1222'})),
    (new Vehicle({id: '10', modelo: 'Boxster 2.9 255cv',                       anoModelo: '2013 Gasolina', anoFabricacao: '1996', marca: 'Porsche',        fipe: '035039-7', placa: 'BCD-3242'})),
  ],

  AUTO_INCREMENT: 11,

  all: function () {
    return this.array;
  },

  find: function (id) {
    return this.array.find(vehicle => vehicle.id === id);
  },

  create: function (obj) {
    obj.id = this.AUTO_INCREMENT+"";
    this.AUTO_INCREMENT++;
    return new Vehicle(obj);
  },

  save: function (vehicle) {
    this.array.push(vehicle);
    return vehicle;
  },

  update: function (vehicle, newValues) {
    auxVehicle = new Vehicle(newValues);
    for(let prop in auxVehicle){
      if(newValues[prop])
        vehicle[prop] = newValues[prop];
    }
    return vehicle;
  },

  delete: function (vehicle) {
    index = this.array.findIndex(v => v.id === vehicle.id);
    this.array.splice(index, 1);
    return vehicle;
  },

  getByFipe: function (fipe) {
    return this.array.find(vehicle => vehicle.fipe === fipe);
  },

  getByPlaca: function (placa) {
    return this.array.find(vehicle => vehicle.placa === placa);
  }
}

module.exports = Vehicles;
