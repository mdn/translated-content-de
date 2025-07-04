---
title: 405 Method Not Allowed
slug: Web/HTTP/Reference/Status/405
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`405 Method Not Allowed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass der Server die Anforderungsmethode kennt, aber die Zielressource diese Methode nicht unterstützt. Der Server **muss** in einer 405-Antwort einen {{HTTPHeader("Allow")}}-Header erzeugen, der eine Liste der Methoden enthält, die die Zielressource derzeit unterstützt.

Unzureichende serverseitige Berechtigungen, die für Dateien oder Verzeichnisse festgelegt sind, können eine 405-Antwort verursachen, wenn die Anfrage sonst erfolgreich wäre.

## Status

```http
405 Method Not Allowed
```

## Beispiele

### TRACE-Methode nicht erlaubt

Serverbetreiber verbieten häufig die Verwendung der `TRACE`-Methode aus Sicherheitsgründen. Das folgende Beispiel zeigt eine typische Antwort, bei der ein Server die Verwendung von `TRACE` nicht erlaubt:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Allow")}}
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP-Statuscode-Definitionen](https://httpwg.org/specs/rfc9110.html#status.405)
- [Anleitung zur Behebung von 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Fehlerbehebung bei HTTP 405](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
