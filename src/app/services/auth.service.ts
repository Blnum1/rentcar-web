import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    console.log("📌 Sending Register Request:", { username, password });
    return this.http.post(`${this.apiUrl}/register`, {username, password});
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {username, password});
  }
}
