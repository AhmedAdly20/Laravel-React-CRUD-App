<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/contacts','ContactsController@index');
Route::post('/contacts/create','ContactsController@create');
Route::get('/contacts/{id}/edit','ContactsController@edit');
Route::put('/contacts/{id}/update','ContactsController@update');
Route::delete('/contacts/{id}/delete','ContactsController@destroy');
