---
title: 404 Not Found
slug: Web/HTTP/Status/404
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`404 Not Found`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die angeforderte Ressource nicht finden kann.
Links, die zu einer 404-Seite führen, werden oft als defekte oder tote Links bezeichnet und können dem [Link-Verfall](https://en.wikipedia.org/wiki/Link_rot) unterliegen.

Ein 404-Statuscode zeigt nur an, dass die Ressource fehlt, ohne darauf hinzuweisen, ob dies vorübergehend oder dauerhaft ist.
Wenn eine Ressource dauerhaft entfernt wurde, sollten Server stattdessen den {{HTTPStatus("410", "410 Gone")}} Status senden.

404-Fehler auf einer Website können zu einer schlechten Benutzererfahrung für Ihre Besucher führen, daher sollte die Anzahl der defekten Links (innerhalb und außerhalb der Seite) minimiert werden, um Frustration bei den Lesern zu vermeiden.
Häufige Ursachen für 404-Antworten sind falsch eingegebene URLs oder Seiten, die verschoben oder gelöscht wurden, ohne eine Umleitung einzurichten.
Für weitere Informationen siehe den [Leitfaden zu Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections).

## Status

```http
404 Not Found
```

## Beispiele

### Seite nicht gefunden

Das Abrufen einer nicht existierenden Seite könnte die folgende Anfrage darstellen:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

Der Server gibt eine ähnliche Antwort wie diese zurück:

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
Das folgende Beispiel verwendet `notfound.html` als Seite, um Besuchern auf 404-Fehlern anzuzeigen, obwohl es ein üblicher Ansatz ist, die Datei `404.html` oder `404.php` (abhängig von der serverseitigen Technologie) im obersten Verzeichnis des Servers zu benennen:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Das Design einer benutzerdefinierten 404-Seite ist in Maßen eine gute Sache.
> Fühlen Sie sich frei, Ihre 404-Seite humorvoll und menschlich zu gestalten, aber verwirren Sie Ihre Besucher nicht darüber, warum sie etwas Unerwartetes sehen.
>
> Ein Beispiel für eine benutzerdefinierte 404-Seite finden Sie auf der [KonMari 404-Seite](https://konmari.com/404).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("410")}}
- [Wikipedia: HTTP 404](https://en.wikipedia.org/wiki/HTTP_404)
