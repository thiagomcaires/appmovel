import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';
import { Response } from '../models/response';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  vehicle: Vehicle;
  error: Boolean;
  errorMsg: String;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  get(form: NgForm): void {
    let valid: Boolean = form.valid;
    if(!valid)
      return;
    let info: String = form.value.info;
    this.vehicleService.info(info).subscribe((response: Response) => {
      this.error = false;
      this.vehicle = <Vehicle>response.data;
    }, (err: HttpErrorResponse) => {
      let response: Response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }

}
