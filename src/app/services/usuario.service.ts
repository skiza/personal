import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient)
  
  url = 'https://gorest.co.in/public/v2'
  token = '53c65aa34378dbdce9c5c74a45c042814d6b630f10f1946521a2f99ad023679a'

  constructor() { }

  getUsuarios():Observable<any>{
  /*   return this.http.get<any>(`${this.url}/users?access-token=${this.token}`) */
    /* return this.http.get<any>(`https://randomuser.me/api/?inc=id,name,email,picture&results=20`) */
    return this.http.get<any>(`https://rickandmortyapi.com/api/character?count=20`)
  }

  getUsuario(id:number):Observable<any>{
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
