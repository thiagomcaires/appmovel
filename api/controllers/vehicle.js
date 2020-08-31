const Vehicles = require('../db/vehicles');
const Response = require('../utils/response');

class VehicleController {

  async get(res) {
    try {

      let vehicles = Vehicles.all();
      res.status(200);
      return Response.success(vehicles, 'Veículos retornados com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }

  async show(res, id) {
    try {

      let vehicle = Vehicles.find(id);
      if(!vehicle) {
        res.status(404);
        return Response.error(null, 'Veículo não encontrado');
      }
      res.status(200);
      return Response.success(vehicle, 'Veículo retornado com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }

  async create(res, obj) {
    let vehicle = Vehicles.getByFipe(obj.fipe);
    if(vehicle){
      res.status(409);
      return Response.error(obj, `Veículo com código FIPE ${obj['fipe']} já cadastrado`);
    }

    vehicle = Vehicles.getByPlaca(obj.placa);
    if(vehicle){
      res.status(409);
      return Response.error(obj, `Veículo com placa ${obj['placa']} já cadastrado`);
    }
    
    try{

      const vehicle = Vehicles.create(obj);
      let newVehicle = Vehicles.save(vehicle);
      res.status(201);
      return Response.success(newVehicle, 'Veículo cadastrado com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }

  async update(res, id, obj) {
    let vehicle = Vehicles.getByFipe(obj.fipe);
    if(vehicle && vehicle.id != id){
      res.status(409);
      return Response.error(obj, `Veículo com código FIPE ${obj['fipe']} já cadastrado`);
    }

    vehicle = Vehicles.getByPlaca(obj.placa);
    if(vehicle && vehicle.id != id){
      res.status(409);
      return Response.error(obj, `Veículo com placa ${obj['placa']} já cadastrado`);
    }

    try{

      let vehicle = Vehicles.find(id);
      if(!vehicle) {
        res.status(404);
        return Response.error(null, 'Veículo não encontrado');
      }
      
      let updatedVehicle = Vehicles.update(vehicle, obj);
      res.status(200);
      return Response.success(updatedVehicle, 'Veículo atualizado com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }
  
  async delete(res, id) {
    try{

      let vehicle = Vehicles.find(id);
      if(!vehicle) {
        res.status(404);
        return Response.error(null, 'Veículo não encontrado');
      }
      let delVehicle = Vehicles.delete(vehicle);
      res.status(200);
      return Response.success(delVehicle, 'Veículo excluído com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }

  async info(res, info) {
    try{

      let vehicleFipe = Vehicles.getByFipe(info);
      let vehiclePlaca = Vehicles.getByPlaca(info);
      if(!vehicleFipe && !vehiclePlaca) {
        res.status(404);
        return Response.error(null, 'Veículo não encontrado');
      }
      let vehicle = vehicleFipe ? vehicleFipe : vehiclePlaca;
      res.status(200);
      return Response.success(vehicle, 'Veículo retornado com sucesso');

    } catch(err) {

      console.log(err);
      res.status(500);
      return Response.error(obj, err);

    }
  }
}

module.exports = new VehicleController;
