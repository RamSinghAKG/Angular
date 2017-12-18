import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('smaller', style({
        transform: 'scale(1)'
      })),
      state('larger', style({
        transform: 'scale(2)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  obj = {};
  title = 'first angular-4 app';
  isTemplateShown = true;
  state: string = 'smaller';
  constructor(private newService: MyDataService){ }

  ngOnInit() {
    console.log(this.newService.success());
    this.newService.obj.name="JOHN";
    this.obj = this.newService.obj;
    this.newService.fetchData();
  
  }
  animate() {
    this.state = this.state == 'larger' ? 'smaller'  : 'larger';
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
