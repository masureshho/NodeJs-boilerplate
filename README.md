# { Project Name }

In `/config/` directory, We have listed all the config with respect to the development environemnts.
Please edit it as of your system's settings.

## Instructions:
#####  Get the project and install dependencies
---
> `git clone { repository-link }`
> `cd {project-name}`
> `npm install`

#####  Get your application running
---
> `npm start` - Basic start without linting, swagger compilations
> `npm run start:dev` - Start application for development environment
> `npm run start:debug` - Start debugging of application
> `npm run start:prod` - Start application for production environment

#####  Useful commands
> `npm build` - Build swagger and babel to support Es6
> `npm serve` - Serve file after build to /dist folder
> `npm lint` - Lint your Javascript file to see if it meets standards

#####  Test commands
> `npm test` - Run all tests
> `npm test:api` - Run all integration tests
> `npm test:unit` - Run all unit tests
> `npm test:cov` - Run coverage tests

#####  Default option
```
Application: http://localhost:8080
Health: http://localhost:8080/ping
API Docs: http://localhost:8080/docs
API Spec: http://localhost:8080/api-docs
Environment: Default

```