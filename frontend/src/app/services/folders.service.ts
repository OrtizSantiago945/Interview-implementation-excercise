import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Folder } from '../models/folder';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  path = "/folders";

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(`${environment.API_URI + this.path}`);
  }

  add(folder : Folder){
    return this.http.post(`${environment.API_URI + this.path}`, folder);
  }

  delete(id : number){
    return this.http.delete(`${environment.API_URI + this.path}/${id}`);
  }
}
