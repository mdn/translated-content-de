---
title: 411 Länge erforderlich
slug: Web/HTTP/Status/411
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`411 Länge erforderlich`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage ohne einen definierten {{HTTPHeader("Content-Length")}}-Header ablehnte.

> [!NOTE]
> Wenn Daten in einer Reihe von Abschnitten gesendet werden, wird der `Content-Length`-Header weggelassen, und am Anfang jedes Abschnitts muss die Länge des aktuellen Abschnitts im hexadezimalen Format angegeben werden. Siehe {{HTTPHeader("Transfer-Encoding")}} für weitere Details.

## Status

```http
411 Length Required
```

## Beispiele

### Chunked POST-Anfrage

Die folgende Anfrage wird in Abschnitten gesendet, was in einigen Fällen die Standardmethode zum Senden von Daten ist, z. B. beim [Schreiben in Streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback):

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

In diesem Fall erwartet der Server eine Anfrage in einem Teil mit einem {{HTTPHeader("Content-Length")}}-Header und gibt eine 411-Antwort zurück:

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
