---
title: 405 Methode nicht erlaubt
slug: Web/HTTP/Status/405
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`405 Method Not Allowed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass der Server die Anfragemethode kennt, aber die Zielressource diese Methode nicht unterstützt.
Der Server **muss** in einer 405-Antwort einen {{HTTPHeader("Allow")}}-Header generieren, der eine Liste von Methoden enthält, die die Zielressource derzeit unterstützt.

Unsachgemäß gesetzte Serverberechtigungen für Dateien oder Verzeichnisse können eine 405-Antwort verursachen, wenn die Anfrage ansonsten erfolgreich sein sollte.

## Status

```http
405 Method Not Allowed
```

## Beispiele

### TRACE-Methode nicht erlaubt

Serverbetreiber verbieten oft die Verwendung der `TRACE`-Methode aus Sicherheitsgründen.
Das folgende Beispiel zeigt eine typische Antwort, bei der ein Server die Verwendung von `TRACE` nicht erlaubt:

```http
TRACE / HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Allow")}}
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP-Statuscode-Definitionen](https://httpwg.org/specs/rfc9110.html#status.405)
- [Wie man 405 Method Not Allowed behebt](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Fehlerbehebung bei HTTP 405](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
