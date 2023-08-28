import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyNode } from './MyNode'; // Import the Node type


@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private  baseUrl = 'http://localhost:8082'

  constructor(private http: HttpClient) { }

  getItems(): Observable<MyNode[]>{
    const url = `${this.baseUrl}/api/v1/nodes`; // Replace with your API endpoint
    return this.http.get<MyNode[]>(url);
  }

  deleteItem(name:string): Observable<void>{
    const url = `${this.baseUrl}/api/v1/nodes/${name}`; // Replace with your API endpoint
    return this.http.delete<void>(url);
  }

  deleteAllItems(): Observable<void>{
    const url = `${this.baseUrl}/api/v1/nodes/delete-all`; 
    return this.http.delete<void>(url);
  }

  addItem(item: MyNode): Observable<void> {
    const url = `${this.baseUrl}/api/v1/nodes`;
    return this.http.post<void>(url, item);
  }
  
}
