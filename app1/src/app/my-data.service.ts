import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { log } from 'util';
@Injectable()
export class MyDataService {
  obj = {
    "id" : 1,
    "name": "Ram",
    "empid": 319
  }
  constructor(private http: Http) { }
  fetchData() {
    return this.http.get("../assets/students.json").map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log("Data :  ",data)
    )
  }
  success(){
    return "Successful";
  }
}
