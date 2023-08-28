import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyCall } from './MyCall';


@Injectable({
  providedIn: 'root'
})
export class CallService {

  private  baseUrl = 'http://localhost:8082'

  constructor(private http: HttpClient) { }

  getItems(): Observable<MyCall[]>{
    const url = `${this.baseUrl}/api/v1/calls`; // Replace with your API endpoint
    return this.http.get<MyCall[]>(url);
  }

  deleteItem(id:number): Observable<void>{
    const url = `${this.baseUrl}/api/v1/calls/${id}`; // Replace with your API endpoint
    return this.http.delete<void>(url);
  }

  deleteAllItems(): Observable<void>{
    const url = `${this.baseUrl}/api/v1/calls/delete-all`; 
    return this.http.delete<void>(url);
  }

  addCall(formData : FormData): Observable<void> {
    const url = `${this.baseUrl}/api/v1/calls`;
    return this.http.post<void>(url, formData);
  }

}
