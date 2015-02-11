# angular-template-maker

Simplify HTML creation from file templates using Angular $compile.

Use it with moderation, only where you MUST use plain HTML strings. If you can,
try to use directives to achieve your goal.

## Installation

You can install angular-template-maker with bower:

> bower install angular-template-maker

Then import the script in your HTML file:

````html
<html>
  <head>
    <script src="angular.js"></script>
    <script src="angular-template-maker.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
  </body>
</html>
````

And finally declare the dependency in you main application file:

````javascript
angular.module('myApp', [ 'ngTemplateMaker' ]);
````

## Usage

Just inject the service and call the function using the html template
location and a data object. The service returns a promise resolved with
a parsed HTML string.

````javascript
app.controller("demoCtrl", ['$scope', 'ngTemplateMaker', function($scope, ngTemplateMaker) {
  var data = {
    example: 'Variable Contents',
    name: 'John Doe'
  };
  ngTemplateMaker('views/template.html', data).then(function(html) {
    // use it with where you MUST use just pure HTML strings.
  });
}]);
````
Assuming that the *views/template.html* file is like the following:

````html
<div>
  <strong>Name: </strong>{{ name }}<br />
  <strong>Example: </strong>{{ example }}<br />
</div>
````

Your parsed HTML will be:

````html
<div>
  <strong>Name: </strong>John Doe<br />
  <strong>Example: </strong>Variable Contents<br />
</div>
````

# License
Copyright (C) 2015 Jaison Erick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



