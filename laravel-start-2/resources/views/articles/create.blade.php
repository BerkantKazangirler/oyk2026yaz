<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Makale Oluştur</title>
</head>
<body>
  <form action={{ url('articles') }} method="post">
    @csrf
    <input type="text" name="title" placeholder="Makale Başlığı">
    <textarea name="content" placeholder="Makale İçeriği"></textarea>
    <button type="submit">Makale Oluştur</button>
    <a href={{ url('articles') }}>Geri</a>
  </form>
</body>
</html>