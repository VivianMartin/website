<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Greg Mallett's Website</title>

    <!-- bower:css -->
    <!-- endbower -->

    <%
    var cssExp = grunt.file.expand({cwd:'src'}, css);
    _.forEach(cssExp, function(name) { %><link rel="stylesheet" href="<%- name %>" /><% }); %>
</head>
<body>
<div class="container">
    <h2>Working <small>bootstrap on</small></h2>
</div>


    <!-- bower:js -->
    <!-- endbower -->

    <%
    var scriptsExp = grunt.file.expand({cwd:'src'}, scripts);
    _.forEach(scriptsExp, function(name) { %><script src="<%- name %>"></script><% }); %>
</body>
</html>