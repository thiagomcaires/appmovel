import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';
import { Response } from '../models/response';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router"


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  vehicle: Vehicle;
  error: Boolean;
  errorMsg: String;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    let vehicle: Vehicle = form.value;

    this.vehicleService.save(vehicle).subscribe((response: Response) => {
      this.error = false;
      this.vehicle = <Vehicle>response.data;
      this.router.navigate(['/listar']);
    }, (err: HttpErrorResponse) => {
      let response = err.error;
      this.error = true;
      this.errorMsg = response.message;
    });
  }

}
