import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';
import { Response } from '../models/response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

}
