import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';
import { Response } from '../models/response';
import { HttpErrorResponse } from '@angular/common/http';
import { faPencilAlt, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  vehicles: Vehicle[];
  error: Boolean;
  errorMsg: String;
  selected: Vehicle;

  viewIcon = faSearch;
  editIcon = faPencilAlt;
  deleteIcon = faTimes;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.lista();
  }

  lista(): void {
    this.vehicleService.all().subscribe((response: Response) => {
      this.error = false;
      this.vehicles = <Vehicle[]>response.data;
    }, (err: HttpErrorResponse) => {
      let response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }

  select(vehicle: Vehicle): void {
    this.selected = {...vehicle};
  }

  delete(vehicle: Vehicle): void {
    this.vehicleService.delete(vehicle).subscribe((response: Response) => {
      this.error = false;
      this.selected = <Vehicle>response.data;
      this.lista();
    }, (err: HttpErrorResponse) => {
      let response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }

  edit(vehicle: Vehicle): void {
    this.vehicleService.update(vehicle).subscribe((response: Response) => {
      this.error = false;
      this.selected = <Vehicle>response.data;
      this.lista();
    }, (err: HttpErrorResponse) => {
      let response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }

  view(id: Number): void {
    this.vehicleService.get(id).subscribe((response: Response) => {
      this.error = false;
      this.selected = <Vehicle>response.data;
      this.lista();
    }, (err: HttpErrorResponse) => {
      let response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }
}
