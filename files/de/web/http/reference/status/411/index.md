---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`411 Length Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage ohne definierten {{HTTPHeader("Content-Length")}} Header abgelehnt hat.

> [!NOTE]
> Wenn Daten in einer Reihe von Blöcken gesendet werden, wird der `Content-Length` Header weggelassen, und zu Beginn jedes Blocks muss die Länge des aktuellen Blocks im Hexadezimalformat angegeben werden.
> Weitere Details finden Sie unter {{HTTPHeader("Transfer-Encoding")}}.

## Status

```http
411 Length Required
```

## Beispiele

### Chunked POST request

Die folgende Anfrage wird in Blöcken gesendet, was in einigen Fällen die Standardmethode für das Senden von Daten ist, wie zum Beispiel beim [Schreiben in Streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback):

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

In diesem Fall erwartet der Server eine Anfrage in einem Teil mit einem {{HTTPHeader("Content-Length")}} Header und gibt eine 411-Antwort zurück:

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "Requests must have a content length header.",
  "documentation": "http://api/example.com/docs/errors",
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
