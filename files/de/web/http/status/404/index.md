---
title: 404 Not Found
slug: Web/HTTP/Status/404
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`404 Not Found`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die angeforderte Ressource nicht finden kann.
Links, die zu einer 404-Seite führen, werden oft als defekte oder tote Links bezeichnet und können Gegenstand von [Linkverfall](https://en.wikipedia.org/wiki/Link_rot) sein.

Ein 404-Statuscode zeigt lediglich an, dass die Ressource fehlt, ohne anzugeben, ob dies vorübergehend oder dauerhaft ist.
Wenn eine Ressource dauerhaft entfernt wurde, sollten Server stattdessen den {{HTTPStatus("410", "410 Gone")}}-Status senden.

404-Fehler auf einer Website können zu einer schlechten Benutzererfahrung für Ihre Besucher führen, daher sollte die Anzahl der defekten Links (intern und extern) minimiert werden, um Frustration bei den Lesern zu vermeiden.
Häufige Ursachen für 404-Antworten sind falsch eingegebene URLs oder Seiten, die verschoben oder gelöscht wurden, ohne eine Weiterleitung einzurichten.
Für weitere Informationen siehe den [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections) Leitfaden.

## Status

```http
404 Not Found
```

## Beispiele

### Seite nicht gefunden

Das Abrufen einer nicht existierenden Seite kann folgendermaßen aussehen:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

Der Server gibt eine Antwort ähnlich dieser zurück:

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

Für den Apache-Server können Sie in einer `.htaccess`-Datei einen Pfad zu einer benutzerdefinierten 404-Seite angeben.
Im folgenden Beispiel wird `notfound.html` als Seite verwendet, die Besuchern bei 404-Vorfällen angezeigt wird. Eine gängige Vorgehensweise ist jedoch, die Datei `404.html` oder `404.php` (abhängig von der Serverseitentechnologie) im obersten Verzeichnis des Servers zu benennen:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Das Design einer benutzerdefinierten 404-Seite ist eine gute Sache in Maßen.
> Machen Sie Ihre 404-Seite ruhig humorvoll und menschenfreundlich, aber verwirren Sie Ihre Besucher nicht darüber, warum sie etwas Unerwartetes sehen.
>
> Für ein Beispiel einer benutzerdefinierten 404-Seite siehe die [KonMari 404-Seite](https://konmari.com/404).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("410")}}
- [Wikipedia: HTTP 404](https://en.wikipedia.org/wiki/HTTP_404)
