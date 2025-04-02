import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weapon } from '../models/weapon.model';
import { Sharpness } from '../models/sharpness.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(`${this.baseUrl}/weapons`);
  }

  getSharpness(): Observable<Sharpness[]> {
    return this.http.get<Sharpness[]>(`${this.baseUrl}/sharpness`);
  }
}
