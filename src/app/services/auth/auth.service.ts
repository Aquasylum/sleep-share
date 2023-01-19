import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  clientId = 'HQ5PQGM57FD6274U';
  redirectUri = 'http://localhost:4200/';
  // KHRXF32VBMDTUWMTDJ2RMX6JA6EYYSPE secret

  authenticate() {
    const authUrl = `https://cloud.ouraring.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code`;
    window.location.href = authUrl;
  }
}
