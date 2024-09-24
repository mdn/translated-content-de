---
title: 301 Dauerhaft Verschoben
slug: Web/HTTP/Status/301
l10n:
  sourceCommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`301 Moved Permanently`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource bei der im `Location`-Header angegebenen URL anfordern und den Benutzer zur neuen Seite umleiten. Suchmaschinen, die diese Antwort erhalten, werden Links zur ursprünglichen URL der umgeleiteten Ressource zuordnen und das {{Glossary("SEO")}}-Ranking auf die neue URL übertragen.

> [!NOTE]
> Im [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch), wenn ein Benutzeragent eine `301`-Antwort auf eine {{HTTPMethod("POST")}}-Anfrage erhält, verwendet er die {{HTTPMethod("GET")}}-Methode in der nachfolgenden Umleitungsanfrage, wie es durch die HTTP-[Spezifikation](#spezifikationen) erlaubt ist.
> Um zu verhindern, dass Benutzeragenten die Anfrage ändern, verwenden Sie stattdessen {{HTTPStatus("308", "308 Permanent Redirect")}}, da nach einer `308`-Antwort die Änderung der Methode untersagt ist.

## Status

```http
301 Moved Permanently
```

## Beispiele

### 301 Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gesendet, bei der eine `301`-Umleitung eingerichtet ist.

```http
GET /de/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

Die Antwort enthält den `301`-Status zusammen mit dem {{HTTPHeader("Location")}}-Header, der die URL angibt, wohin die Ressource verschoben wurde.

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently. Redirecting to /de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}} entspricht `301`, aber die Anfragemethode wird nicht geändert
- {{HTTPStatus("302", "302 Found")}} temporäre Umleitung
