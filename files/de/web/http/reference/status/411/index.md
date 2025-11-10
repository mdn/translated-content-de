---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`411 Length Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage ohne einen definierten {{HTTPHeader("Content-Length")}} Header abgelehnt hat.

> [!NOTE]
> Beim Senden von Daten in einer Reihe von Teilen wird der `Content-Length` Header weggelassen. Am Anfang jedes Teils muss die Länge des aktuellen Teils im hexadezimalen Format enthalten sein.
> Weitere Details finden Sie unter {{HTTPHeader("Transfer-Encoding")}}.

## Status

```http
411 Length Required
```

## Beispiele

### Chunked POST-Anfrage

Die folgende Anfrage wird in Teilen gesendet, was in einigen Fällen die Standardmethode zum Senden von Daten ist, zum Beispiel beim [Schreiben in Streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback):

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

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
