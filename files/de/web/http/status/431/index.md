---
title: 431 Anforderungsheaderfelder zu groß
slug: Web/HTTP/Status/431
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`431 Anforderungsheaderfelder zu groß`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass der Server die Anfrage ablehnt, da die [HTTP-Header](/de/docs/Web/HTTP/Headers) der Anfrage zu lang sind.
Die Anfrage kann erneut eingereicht werden, nachdem die Größe der Anfrage-Header reduziert wurde.

431 kann verwendet werden, wenn die Gesamtgröße der Anfrage-Header zu groß ist oder wenn ein einzelnes Header-Feld zu groß ist.
Um Clients zu helfen, die auf diesen Fehler stoßen, sollten Sie im Antworttext angeben, welches der beiden das Problem darstellt und idealerweise angeben, welche Header zu groß sind.
Dies ermöglicht es den Benutzern, das Problem zu lösen, zum Beispiel durch Löschen von Cookies.

Server erzeugen diesen Status häufig, wenn:

- Die {{httpheader("Referer")}}-URL zu lang ist
- Zu viele [Cookies](/de/docs/Web/HTTP/Cookies) in der Anfrage gesendet werden

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

Der Server antwortet mit einer Nachricht, die angibt, welcher Header problematisch war:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("414", "414 URI Too Long")}}
- {{Glossary("Request header")}}
