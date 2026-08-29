<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Makaleler</title>
</head>
<body>
  <a href={{ url('articles/create') }}>Makale Oluştur</a>
  <ul>
    @foreach ($articles as $article)
      <li><a href={{ url('articles/' . $article->id) }}>{{ $article->title }}</a></li>
    @endforeach
  </ul>
</body>
</html>