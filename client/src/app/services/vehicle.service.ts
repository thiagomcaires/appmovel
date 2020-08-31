import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Response } from '../models/response';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  all(): Observable<Response> {
    return this.apiService.get(`/vehicles`);
  }

  get(id: Number): Observable<Response> {
    return this.apiService.get(`/vehicles/${id}`);
  }

  info(info: String): Observable<Response> {
    return this.apiService.get(`/vehicle/${info}`);
  }

  save(vehicle: Vehicle): Observable<Response> {
    return this.apiService.post(`/vehicles`, vehicle);
  }

  update(vehicle: Vehicle): Observable<Response> {
    return this.apiService.put(`/vehicles/${vehicle.id}`, vehicle)
  }

  delete(vehicle: Vehicle): Observable<Response> {
    return this.apiService.delete(`/vehicles/${vehicle.id}`);
  }

  constructor(private apiService: ApiService) { }
}
