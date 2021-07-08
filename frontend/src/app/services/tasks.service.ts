import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  path = "/tasks";

  constructor(private http : HttpClient) { }

  getByFolder(id : number){
    return this.http.get(`${environment.API_URI + this.path}/${id}`);
  }

  add(task : Task){
    return this.http.post(`${environment.API_URI + this.path}`, task);
  }

  delete(id : number){
    return this.http.delete(`${environment.API_URI + this.path}/${id}`);
  }

  updateField(id : number, description : string){
    return this.http.put(`${environment.API_URI + this.path}/${id}`, {description: description});
  }

  updateStatus(id : number, status : boolean){
    return this.http.put(`${environment.API_URI + this.path}/${id}`, {completed: status});
  }

}
