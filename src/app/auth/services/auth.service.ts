import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpointAPI: string = environment.endpointAPI;

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.endpointAPI}/usuarios/17`);
  }
}
