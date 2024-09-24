---
title: 404 Nicht Gefunden
slug: Web/HTTP/Status/404
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`404 Not Found`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die angeforderte Ressource nicht finden kann. Links, die zu einer 404-Seite führen, werden oft als defekte oder tote Links bezeichnet und können dem [Linkverfall](https://en.wikipedia.org/wiki/Link_rot) unterliegen.

Ein 404-Statuscode zeigt nur an, dass die Ressource fehlt, ohne zu sagen, ob dies vorübergehend oder dauerhaft ist. Wenn eine Ressource dauerhaft entfernt wurde, sollten Server stattdessen den {{HTTPStatus("410", "410 Gone")}}-Status senden.

404-Fehler auf einer Website können zu einem schlechten Benutzererlebnis für Ihre Besucher führen. Daher sollte die Anzahl der defekten Links (intern und extern) minimiert werden, um Frustrationen für Leser zu vermeiden. Häufige Ursachen für 404-Antworten sind falsch eingegebene URLs oder Seiten, die verschoben oder ohne Weiterleitung gelöscht wurden. Weitere Informationen finden Sie im Leitfaden [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections).

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

Für den Apache-Server können Sie in einer `.htaccess`-Datei einen Pfad zu einer benutzerdefinierten 404-Seite angeben. Das folgende Beispiel verwendet `notfound.html` als Seite, die Besuchern bei 404 angezeigt wird, obwohl ein gängiger Ansatz darin besteht, die Datei `404.html` oder `404.php` (abhängig von der Serverseitentechnologie) auf der obersten Ebene des Servers zu benennen:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Das Design einer benutzerdefinierten 404-Seite ist in Maßen eine gute Sache.
> Sie können Ihre 404-Seite gerne humorvoll und menschlich gestalten, aber verwirren Sie Ihre Besucher nicht, warum sie etwas Unerwartetes sehen.
>
> Ein Beispiel für eine benutzerdefinierte 404-Seite finden Sie auf der [KonMari 404-Seite](https://konmari.com/404).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("410")}}
- [Wikipedia: HTTP 404](https://en.wikipedia.org/wiki/HTTP_404)
