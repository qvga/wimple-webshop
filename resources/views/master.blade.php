<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta name="robots" content="noindex, nofollow">
    <link rel="stylesheet" href="{{ mix("css/app.css") }}" media="screen" charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <title>Wimple</title>
</head>
<body>
<div id="app"></div>
<script src="{{ asset(mix("js/app.js")) }}" type="text/javascript"></script>
</body>
</html>