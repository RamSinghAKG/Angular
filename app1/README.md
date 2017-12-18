## First Angular 4 tutorial link : 
https://www.youtube.com/watch?v=kFTmoLm9Jwg

## Angular cli
https://cli.angular.io/

## App1
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## How to upate angular CLI in global/local
### #for global
            npm uninstall -g angular-cli
            npm cache clean
            npm install -g @angular/cli@latest
### #for local
            rm -rf node_modules
            npm uninstall --save-dev angular-cli
            npm install --save-dev @angular/cli@latest
            npm install
### #Update core package after updating CLI
            npm install @angular/{animations,common,compiler, compiler-cli,core,forms,http , platform-browser,platform-browser-dynamic,               platform-server,router}@next typescript@2.4.2 rxjs@'^5.5.2'
            npm install typescript@2.4.2 --save-exact
