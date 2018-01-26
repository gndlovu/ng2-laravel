# Ng2Laravel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
It's a basic front-end "Task Management Tool" that integrates with [LaravelApi](https://github.com/gndlovu/LaravelApi) to retrieve, update and delete tasks.

In order to run this project, the following software is required:
### Node.js and npm
Node.js and Node's package manager, npm, are used for installing dependencies, running the build steps, and running tests.

## Getting Started

Begin by cloning the repository: 
git clone https://github.com/gndlovu/ng2-laravel.git

cd path/to/ng2-laravel

Use npm to get dependencies:
`npm install`

Open https://github.com/gndlovu/ng2-laravel/blob/master/src/app/task.service.ts
Change http://test.tmt/api/v1/ to http://{{api-url}}/api/v1/

You can find and setup the API in [LaravelApi](https://github.com/gndlovu/LaravelApi).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
