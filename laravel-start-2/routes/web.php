<?php

use App\Models\Article;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/articles', function () {
//     $articles = Article::all();
//     return $articles;
// });

Route::get('/articles', function () {
    $articles = Article::all();
    return view('articles.index', ['articles' => $articles]);
});

Route::get('/articles/{id}', function ($id) {
    $article = Article::find($id);
    return view('articles.detail', ['article' => $article]);
});

Route::get('/articles/create', function () {
    return view('articles.create');
});

Route::post('/articles', function () {
    $article = new Article();
    $article->title = request('title');
    $article->content = request('content');
    $article->save();
    return redirect(url('articles/' . $article->id));
});

Route::get('/articles/{id}/edit', function ($id) {
    $article = Article::find($id);
    return view('articles.edit', ['article' => $article]);
});

Route::put('/articles/{id}', function ($id, Request $request) {
    $article = Article::find($id);
    $article->title = $request->title;
    $article->content = $request->content;
    $article->save();
    return redirect(url('articles/' . $id));
});

Route::delete('/articles/{id}', function ($id) {
    $article = Article::find($id);
    $article->delete();
    return redirect(url('articles'));
});