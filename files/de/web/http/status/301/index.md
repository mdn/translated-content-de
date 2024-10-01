---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
l10n:
  sourceCommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`301 Moved Permanently`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die angeforderte Ressource dauerhaft zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite umleiten. Suchmaschinen, die diese Antwort erhalten, werden Links zur Original-URL der umgeleiteten Ressource zuordnen und das {{Glossary("SEO", "SEO")}}-Ranking an die neue URL übertragen.

> [!NOTE]
> Im [Fetch-Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch) wird beim Empfang eines `301` als Antwort auf eine {{HTTPMethod("POST")}}-Anfrage von einem Benutzeragenten die {{HTTPMethod("GET")}}-Methode in der nachfolgenden Umleitungsanfrage verwendet, wie es die HTTP-[Spezifikation](#spezifikationen) erlaubt.
> Um zu vermeiden, dass Benutzeragenten die Anfrage ändern, verwenden Sie stattdessen {{HTTPStatus("308", "308 Permanent Redirect")}}, da eine Änderung der Methode nach einer `308`-Antwort untersagt ist.

## Status

```http
301 Moved Permanently
```

## Beispiele

### 301-Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, die mit einer `301`-Umleitung versehen ist.

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

Die Antwort enthält den `301`-Status zusammen mit dem {{HTTPHeader("Location")}}-Header, der die URL angibt, wohin die Ressource verschoben wurde.

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently. Redirecting to /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Statuscodes der Antworten](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}} entspricht `301`, jedoch wird die Anfragemethode nicht geändert
- {{HTTPStatus("302", "302 Found")}} vorübergehende Umleitung
