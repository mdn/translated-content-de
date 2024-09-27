---
title: 411 Length Required
slug: Web/HTTP/Status/411
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`411 Length Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage ohne definierten {{HTTPHeader("Content-Length")}}-Header ablehnte.

> [!NOTE]
> Beim Senden von Daten in einer Reihe von Blöcken wird der `Content-Length`-Header weggelassen, und am Anfang jedes Blocks muss die Länge des aktuellen Blocks im hexadezimalen Format angegeben werden.
> Siehe {{HTTPHeader("Transfer-Encoding")}} für weitere Details.

## Status

```http
411 Length Required
```

## Beispiele

### Chunked POST-Anfrage

Die folgende Anfrage wird in Blöcken gesendet, was in einigen Fällen die Standardmethode zum Senden von Daten ist, wie zum Beispiel beim [Schreiben in Streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback):

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

In diesem Fall erwartet der Server eine Anfrage in einem Stück mit einem {{HTTPHeader("Content-Length")}}-Header und gibt eine 411-Antwort zurück:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
