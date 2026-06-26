---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`431 Request Header Fields Too Large`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage ablehnt, da die [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) der Anfrage zu lang sind. Die Anfrage kann erneut gesendet werden, nachdem die Größe der Anfrage-Header verringert wurde.

431 kann verwendet werden, wenn die Gesamtgröße der Anfrage-Header zu groß ist oder wenn ein einzelnes Header-Feld zu groß ist. Um Clienten zu helfen, die auf diesen Fehler stoßen, sollte im Antworttext angegeben werden, welches der beiden Probleme vorliegt, und idealerweise, welche Header zu groß sind. Dies ermöglicht es Benutzern, das Problem zu beheben, beispielsweise durch das Löschen von Cookies.

Server erzeugen diesen Status häufig, wenn:

- Die {{httpheader("Referer")}} URL zu lang ist
- Zu viele [Cookies](/de/docs/Web/HTTP/Guides/Cookies) in der Anfrage gesendet werden

## Status

```http
431 Request Header Fields Too Large
```

## Beispiele

### Header-Feld zu groß

Im folgenden Beispiel ist der {{httpheader("Cookie")}}-Header in der Anfrage zu groß:

```http
GET /doc HTTP/1.1
Host: example.com
Cookie: cookie1=value1; cookie2=value2; cookie3=[…]
```

Der Server antwortet mit einer Nachricht, die anzeigt, welcher Header problematisch war:

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/html

<!doctype html>
  <head>
    <title>Request Header Fields Too Large</title>
  </head>
  <body>
    <h1>Request Header Fields Too Large</h1>
    <p>The "Cookie" header was too large.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("414", "414 URI Too Long")}}
- {{Glossary("Request_header", "Anfrage-Header")}}
