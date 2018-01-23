#! /usr/bin/env node
var FILE_ENCODING = 'UTF-8';

var fs = require('fs');
var YAML = require('yamljs');
var CodeGen = require('swagger-js-codegen').CodeGen;
var SwaggerParser = require('swagger-parser');

var clientGenerationOptions = YAML.load('apiClients.yml');

generateClients();

function generateClients(){
    for(var i=0;i<clientGenerationOptions.length;i++){
        createClientFromOptions( clientGenerationOptions[i] );
    }
}

function createClientFromOptions( options ){
    var className = options.name;
    var moduleName = 'swaggerClient.' + className;
    var generatedFilePath = options.outputDirectory + moduleName + '.js';

    SwaggerParser.dereference( options.swaggerDefinitionUrl )
        .then(generateClient)
        .then(writeClient);

    function generateClient( swaggerDefinition ){
        return CodeGen.getAngularCode({
            'moduleName' : moduleName,
            'className' : className,
            'swagger' : swaggerDefinition
        });
    }

    function writeClient(angularSourceCode){
        fs.writeFile( generatedFilePath, angularSourceCode, FILE_ENCODING );
    }
}