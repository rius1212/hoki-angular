import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8500';

@Injectable({
  providedIn: 'root'
})
export class PembelianService {

  constructor(private http: HttpClient) { }

  // Header Pembelian
  getAllHeader(): Observable<any> {
    return this.http.get(`${baseUrl}/headerpembelian/all`);
  }

  createHeader(data): Observable<any> {
    return this.http.post(`${baseUrl}/headerpembelian/save`, data);
  }

  updateHeader(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/headerpembelian/update/${id}`, data);
  }

  deleteHeader(id): Observable<any> {
    return this.http.delete(`${baseUrl}/headerpembelian/delete/${id}`);
  }

  // Detail Pembelian
  getAllDetail(): Observable<any> {
    return this.http.get(`${baseUrl}/detailpembelian/all`);
  }

  createDetail(data): Observable<any> {
    return this.http.post(`${baseUrl}/detailpembelian/save`, data);
  }

  updateDetail(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/detailpembelian/update/${id}`, data);
  }

  deleteDetail(id): Observable<any> {
    return this.http.delete(`${baseUrl}/detailpembelian/delete/${id}`);
  }
}
