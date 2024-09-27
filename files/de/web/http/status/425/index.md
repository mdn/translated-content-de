---
title: 425 Too Early
slug: Web/HTTP/Status/425
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`425 Too Early`** zeigt einen [Client-Fehlerantwortstatus](/de/docs/Web/HTTP/Status#client_error_responses) an, der darauf hinweist, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird, um potenzielle Replay-Angriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es frühe Daten (auch bekannt als Zero-RTT-Daten [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, Daten im ersten Round Trip einer Verbindung an einen Server zu senden, ohne auf den Abschluss des TLS-[Handshake](/de/docs/Glossary/TCP_handshake) zu warten.
Ein Client, der eine Anfrage in frühen Daten sendet, muss den `Early-Data`-Header nicht einschließen.
Siehe {{HTTPHeader("Early-Data")}} für weitere Informationen.

## Status

```http
425 Too Early
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
