---
title: 425 Too Early
slug: Web/HTTP/Status/425
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`425 Too Early`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird, um potenzielle Wiederholungsangriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es frühe Daten (auch bekannt als Zero Round Trip Time [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)), dass der Client Daten in der ersten Runde einer Verbindung an einen Server sendet, ohne auf den Abschluss des TLS-[Handshakes](/de/docs/Glossary/TCP_handshake) zu warten. Ein Client, der eine Anfrage in frühen Daten sendet, muss den `Early-Data`-Header nicht einschließen. Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

## Status

```http
425 Too Early
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
