<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Greg Mallett's Website</title>

    <% _.forEach(css, function(name) { %>
    <link rel="stylesheet" href="<%- name %>" />
    <% }); %>
</head>
<body>
<div class="container-fluid">
    <h2>Working <small>bootstrap on</small></h2>
</div>


<% _.forEach(scripts, function(name) { %>
<script src="<%- name %>"></script>
<% }); %>
</body>
</html>