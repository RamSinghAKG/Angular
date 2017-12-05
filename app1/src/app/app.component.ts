import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first angular-4 app';
  obj = {
    id: "1",
    name: "Ram"
  };
  isTemplateShown = true;
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
