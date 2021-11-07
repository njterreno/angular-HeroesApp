import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private endpointAPI:string=environment.endpointAPI;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpointAPI}/heroes`)
  }

  getHeroesById(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endpointAPI}/heroes/${id}`)
  }

  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpointAPI}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endpointAPI}/heroes`, heroe)
  }

  actualizarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endpointAPI}/heroes/${heroe.id}`, heroe)  
  }

  borrarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`${this.endpointAPI}/heroes/${id}`)
  }
}
