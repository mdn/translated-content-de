---
title: 404 Not Found
slug: Web/HTTP/Reference/Status/404
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`404 Not Found`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die angeforderte Ressource nicht finden kann.
Links, die zu einer 404-Seite führen, werden oft als fehlerhafte oder tote Links bezeichnet und können von [Link-Verfall](https://en.wikipedia.org/wiki/Link_rot) betroffen sein.

Ein 404-Statuscode gibt nur an, dass die Ressource fehlt, ohne anzugeben, ob dies vorübergehend oder dauerhaft ist.
Wenn eine Ressource dauerhaft entfernt wurde, sollten Server stattdessen den Status {{HTTPStatus("410", "410 Gone")}} senden.

404-Fehler auf einer Website können zu einer schlechten Benutzererfahrung für Ihre Besucher führen, sodass die Anzahl der fehlerhaften Links (intern und extern) minimiert werden sollte, um Frustration bei den Lesern zu verhindern.
Häufige Ursachen für 404-Antworten sind falsch eingetippte URLs oder Seiten, die verschoben oder gelöscht wurden, ohne eine Umleitung einzurichten.
Weitere Informationen finden Sie im [Leitfaden zu Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections).

## Status

```http
404 Not Found
```

## Beispiele

### Seite nicht gefunden

Das Abrufen einer nicht existierenden Seite könnte wie folgt aussehen:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

Der Server gibt eine ähnliche Antwort zurück:

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

### Benutzerdefinierte Fehlerseite in Apache

Für den Apache-Server können Sie einen Pfad zu einer benutzerdefinierten 404-Seite in einer `.htaccess`-Datei angeben.
Das folgende Beispiel verwendet `notfound.html` als Seite, um Besuchern bei einem 404-Fehler anzuzeigen, obwohl ein gängiger Ansatz darin besteht, die Datei `404.html` oder `404.php` zu nennen (abhängig von der serverseitigen Technologie) auf oberster Serverebene:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Das Design benutzerdefinierter 404-Seiten ist in Maßen eine gute Sache.
> Fühlen Sie sich frei, Ihre 404-Seite humorvoll und menschlich zu gestalten, aber verwirren Sie Ihre Besucher nicht darüber, warum sie etwas Unerwartetes sehen.
>
> Ein Beispiel für eine benutzerdefinierte 404-Seite finden Sie auf der [KonMari 404-Seite](https://konmari.com/404).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("410")}}
- [Wikipedia: HTTP 404](https://en.wikipedia.org/wiki/HTTP_404)
