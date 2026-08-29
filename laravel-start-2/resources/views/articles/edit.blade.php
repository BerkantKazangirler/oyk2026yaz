<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Makale Düzenle</title>
</head>
<body>
  <form action={{ url('articles/' . $article->id) }} method="post">
  @method('PUT')
  <label for="title">Makale Başlığı</label>
  <input type="text" name="title" id="title" value={{ $article->title }}>
  <label for="content">Makale İçeriği</label>
  <textarea name="content" id="content">{{ $article->content }}</textarea>
  <button type="submit">Makale Düzenle</button>
  <a href={{ url('articles/' . $article->id) }}>Geri</a>
  </form>
</body>
</html>