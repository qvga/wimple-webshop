<?php

Route::get('/', function () {
    return view('master');
});

Route::get('/manifest.json', function () { return view('manifest'); });