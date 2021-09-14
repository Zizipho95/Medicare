import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../models/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProductByID(id: any): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
}
}
