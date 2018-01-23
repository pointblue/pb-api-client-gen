# Javascript API Client Generator  

Generate a Javascript API client from a swagger document, using swagger client
generator.  

This project just makes it easier to define and generate API clients.  

## Installation  

All commands must be run from the root path of your project  

  1. `npm install pb-api-client-gen --save-dev`  
  2. Create an `apiClients.yml` file using the example below  
  3. Add command to `package.json` file  
    - Add a property named `build-api` to the `scripts` object. Set it's value to `build-app`. 
  
## Creating an `apiClients.yml` file

`apiClients.yml` should be in the root path of your project. This file defines the clients that will be generated.  

### Example file

```
- name: SpeciesRequest
  swaggerDefinitionUrl: http://localhost/api/docs/v3/species.swagger.yaml
  outputDirectory: resources/js/angular/apiRequest/
```  

### Properties  

The following properties are required for each client that will be generated:  

  - `name` - The name of the class that will be generated
  - `swaggerDefinitionUrl` - URL of the target swagger definition
  - `outputDirectory` - Destination path of generated clients  
  
## Generating API code  

  1. Edit the `package.json` file of your project. Use the example below for reference.
  2. Run `npm run build-app` to generate the client code.  

Example:  

```
  "scripts": {
    "build-api": "build-api"
  }
```

## Notes  

This project is mostly a wrapper for [https://github.com/wcandillon/swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)  

Creating an npm command - [http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm](http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm)  