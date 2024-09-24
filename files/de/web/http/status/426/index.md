---
title: 426 Upgrade erforderlich
slug: Web/HTTP/Status/426
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`426 Upgrade erforderlich`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server sich weigert, die Anfrage mit dem aktuellen Protokoll auszuführen, aber möglicherweise bereit ist, dies zu tun, nachdem der Client auf ein anderes Protokoll umgestellt hat.

Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header mit dieser Antwort, um die erforderlichen Protokolle anzugeben.

## Status

```http
426 Upgrade Required
```

## Beispiele

### Upgrade erforderlich von HTTP/1.1

Angenommen, eine GET-Anfrage an ein System:

```http
GET /resources HTTP/1.1
Host: example.com
```

Der Ursprungsserver erwartet, dass Anfragen in [HTTP/3](/de/docs/Glossary/HTTP_3) erfolgen müssen:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
