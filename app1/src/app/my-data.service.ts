import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyDataService {
  obj = {
    "id" : 1,
    "name": "Ram",
    "empid": 319
  }
  constructor(private http: Http) { }
  fetchData() {
    return this.http.get('src/data/students.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
  success(){
    return "Successful";
  }

}
