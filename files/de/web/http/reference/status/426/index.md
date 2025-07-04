---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`426 Upgrade Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) bedeutet, dass der Server sich geweigert hat, die Anfrage mit dem aktuellen Protokoll auszuführen. Der Server könnte jedoch bereit sein, dies zu tun, nachdem der Client auf ein anderes Protokoll umgestiegen ist.

Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header mit dieser Antwort, um die erforderlichen Protokolle anzuzeigen.

## Status

```http
426 Upgrade Required
```

## Beispiele

### Upgrade erforderlich von HTTP/1.1

Gegeben eine GET-Anfrage an ein System:

```http
GET /resources HTTP/1.1
Host: example.com
```

Der Ursprungsserver erwartet, dass Anfragen in {{Glossary("HTTP_3", "HTTP/3")}} gestellt werden:

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
