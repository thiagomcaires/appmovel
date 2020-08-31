import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiUrl;

  opt = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  get(uri: String): Observable<Response> {
    return this.httpClient.get<Response>(`${this.url}${uri}`)
  }

  post(uri: String, object: Object): Observable<Response> {
    return this.httpClient.post<Response>(`${this.url}${uri}`, object, this.opt)
  }

  put(uri: String, object: Object): Observable<Response> {
    return this.httpClient.put<Response>(`${this.url}${uri}`, object, this.opt)
  }

  delete(uri: String): Observable<Response> {
    return this.httpClient.delete<Response>(`${this.url}${uri}`, this.opt)
  }

  constructor(private httpClient: HttpClient) { }
}
