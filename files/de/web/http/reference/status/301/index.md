---
title: 301 Moved Permanently
slug: Web/HTTP/Reference/Status/301
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`301 Moved Permanently`** [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) gibt an, dass die angeforderte Ressource dauerhaft zur URL im {{HTTPHeader("Location")}}-Header verschoben wurde.

Ein Browser, der diesen Status erhält, wird automatisch die Ressource unter der URL im `Location`-Header anfordern und den Benutzer zur neuen Seite weiterleiten. Suchmaschinen, die diese Antwort erhalten, werden Links zur ursprünglichen URL der weitergeleiteten Ressource zuordnen und das {{Glossary("SEO", "SEO")}}-Ranking an die neue URL weitergeben.

> [!NOTE]
> Im [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch), wenn ein Benutzeragent eine `301`-Antwort auf eine {{HTTPMethod("POST")}}-Anfrage erhält, verwendet er die {{HTTPMethod("GET")}}-Methode in der nachfolgenden Umleitungsanfrage, wie es die HTTP-[Spezifikation](#spezifikationen) erlaubt.
> Um zu verhindern, dass Benutzeragenten die Anfrage ändern, verwenden Sie stattdessen {{HTTPStatus("308", "308 Permanent Redirect")}}, da das Ändern der Methode nach einer `308`-Antwort untersagt ist.

## Status

```http
301 Moved Permanently
```

## Beispiele

### 301-Antwort auf eine verschobene Ressource

Die folgende {{HTTPMethod("GET")}}-Anfrage wird an eine Ressource gestellt, für die eine `301`-Weiterleitung eingerichtet ist.

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

Die Antwort enthält den `301`-Status zusammen mit dem {{HTTPHeader("Location")}}-Header, der die URL angibt, zu der die Ressource verschoben wurde.

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently. Redirecting to /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}} gleichwertig zu `301`, aber die Anfragemethode wird nicht geändert
- {{HTTPStatus("302", "302 Found")}} temporäre Umleitung
