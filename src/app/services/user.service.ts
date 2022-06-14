import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/c93ab5f1-05b3-4787-8cd9-32a8de63a1e4';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',


    })
  }


  constructor(private httpClient: HttpClient) { }

  // c.r.u.d - CREATE, READ, UPTADE, DELETE

  // Retornar a lista de usuarios READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }


  // salva usuario no bando de CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user,this.httpOptions)

  }
 //Exclui o usuario do banco DELETE
 deleteUser(id: number):Observable<User>{
  return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
}

// Edite usuario UPDATE
updateUser(id: string, user: User):Observable<User> {
  return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
}


// Lista usuario unico
getUser(id: string):Observable<User []> {
  return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
}
}

