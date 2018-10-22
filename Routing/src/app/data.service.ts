import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = "https://jsonplaceholder.typicode.com/" ;
  

  constructor(private http : HttpClient) {}
 
  public getUsers() {
    return this.http.get( this.url + "users")
  }
}
