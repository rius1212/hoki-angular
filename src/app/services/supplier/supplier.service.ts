import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8500/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/save`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

}
