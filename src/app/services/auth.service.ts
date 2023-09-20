import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://159.65.96.86:8080/services/auth';
  private localStorageKey = 'isLoggedIn';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    console.log(
      this.http.post(`${this.apiUrl}/signin`, { username, password })
    );
    localStorage.setItem(this.localStorageKey, 'true');
    return this.http.post(`${this.apiUrl}/signin`, { username, password });
  }
  logout() {
    localStorage.setItem(this.localStorageKey, 'false');
  }
  isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem(this.localStorageKey);
    return loggedIn === 'true';
  }
}
