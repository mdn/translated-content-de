---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`426 Upgrade Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass der Server die Ausführung der Anfrage mit dem aktuellen Protokoll ablehnt, aber möglicherweise bereit ist, dies zu tun, nachdem der Client auf ein anderes Protokoll umgestiegen ist.

Der Server sendet mit dieser Antwort einen {{HTTPHeader("Upgrade")}}-Header, um die erforderlichen Protokolle anzuzeigen.

## Status

```http
426 Upgrade Required
```

## Beispiele

### Upgrade erforderlich von HTTP/1.1

Gegeben ist eine GET-Anfrage an ein System:

```http
GET /resources HTTP/1.1
Host: example.com
```

Der Ursprung-Server erwartet, dass Anfragen in {{Glossary("HTTP_3", "HTTP/3")}} gestellt werden:

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
