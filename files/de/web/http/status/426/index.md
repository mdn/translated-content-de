---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`426 Upgrade Required`** (Client-Fehlerantwort) bedeutet, dass der Server die Ausführung der Anfrage mit dem aktuellen Protokoll verweigerte, aber möglicherweise bereit ist, dies nach einem Upgrade des Clients auf ein anderes Protokoll zu tun.

Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header mit dieser Antwort, um die erforderlichen Protokolle anzugeben.

## Status

```http
426 Upgrade Required
```

## Beispiele

### Upgrade erforderlich von HTTP/1.1

Bei einer GET-Anfrage an ein System:

```http
GET /resources HTTP/1.1
Host: example.com
```

Erwartet der Ursprungsserver, dass Anfragen in [HTTP/3](/de/docs/Glossary/HTTP_3) erfolgen:

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
