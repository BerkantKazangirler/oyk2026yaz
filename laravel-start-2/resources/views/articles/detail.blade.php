<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ $article->title }}</title>
</head>
<body>
  <h1>{{ $article->title }}</h1>
  <p>{{ $article->content }}</p>
  <a href={{ url('articles/' . $article->id . '/edit') }}>Düzenle</a>
  <a href={{ url('articles') }}>Geri</a>
  <form action={{ url('articles/' . $article->id) }} method="post">
    @method('DELETE')
    <button type="submit">Makale Sil</button>
  </form>
</body>
</html>