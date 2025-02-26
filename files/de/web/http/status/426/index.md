---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
l10n:
  sourceCommit: 585f0ff3393eec16f00cf3adcf4e59250c1fe315
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`426 Upgrade Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Ausführung der Anfrage mit dem aktuellen Protokoll abgelehnt hat, aber möglicherweise bereit ist, dies zu tun, nachdem der Client auf ein anderes Protokoll gewechselt hat.

Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header mit dieser Antwort, um das erforderliche(n) Protokoll(e) anzuzeigen.

## Status

```http
426 Upgrade Required
```

## Beispiele

### Upgrade erforderlich von HTTP/1.1

Angenommen, es gibt eine GET-Anfrage an ein System:

```http
GET /resources HTTP/1.1
Host: example.com
```

Der Ursprungsserver erwartet, dass die Anfragen in {{Glossary("HTTP_3", "HTTP/3")}} gestellt werden:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
