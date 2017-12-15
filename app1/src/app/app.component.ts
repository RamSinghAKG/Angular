import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj = {};
  title = 'first angular-4 app';
  isTemplateShown = true;
  constructor(private newService: MyDataService){ }

  ngOnInit() {
    console.log(this.newService.success());
    this.newService.obj.name="JOHN";
    this.obj = this.newService.obj;
    this.newService.fetchData();
  }
  links=[
    {
      name: "Tour of Heroes",
      url: "https://angular.io/tutorial"
    },
    {
      name: "CLI Documentation",
      url: "https://github.com/angular/angular-cli/wiki"
    },
    {
      name: "Angular API",
      url: "https://angular.io/api"
    }
  ];

}
