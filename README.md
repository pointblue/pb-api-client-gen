# Javascript API Client Generator  

Generate a Javascript API client from a swagger document, using swagger client
generator.  

This project just makes it easier to define and generate API clients.  

## Installation  

`npm install pb-api-client-gen --save-dev`  

  - Create an `apiClients.yml` file
  - Add command to `package.json` file  
  
## Example apiClients.yml

`apiClients.yml` should be in the root path of your project

```
- name: SpeciesRequest
  swaggerDefinitionUrl: http://localhost/api/docs/v3/species.swagger.yaml
  outputDirectory: resources/js/angular/apiRequest/
```  

### Properties  

  - `name` - The name of the class that will be generated
  - `swaggerDefinitionUrl` - URL of the target swagger definition
  - `outputDirectory` - Destination path of generated clients  
  
## Generating API code  

All commands should be executed from the root path of your project  

`node ./node_modules/pb-api-client-gen/index.js`  

Optionally, you can edit the `package.json` file of your project.  
Example:  

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build-api": "node ./node_modules/pb-api-client-gen/index.js"
  },
```

You can then run `npm run build-app` to generate the client code  
