<!DOCTYPE html>
<html ng-app="gum.app">
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Greg Mallett's Website</title>

    <!-- build:css css/app-css-lib.css -->
    <!-- bower:css -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css css/app-css-main.css -->
    <%
    var cssExp = grunt.file.expand({cwd:'src'}, css);
    _.forEach(cssExp, function(name) { %><link rel="stylesheet" href="<%- name %>" /><% }); %>
    <!-- endbuild -->
</head>
<body>
<div class="container" ng-controller="MainCtrl as main">
    <h2>Working <small>bootstrap on</small></h2>
    <p>{{main.hello}}</p>
</div>


    <!-- build:js js/app-lib.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js js/app.js -->
    <%
    var scriptsExp = grunt.file.expand({cwd:'src'}, scripts);
    _.forEach(scriptsExp, function(name) { %>
    <script src="<%- name %>"></script><% }); %>
    <!-- endbuild -->
</body>
</html>