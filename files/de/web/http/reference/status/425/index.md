---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`425 Too Early`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird, um potenzielle Replay-Angriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es frühe Daten (auch bekannt als Null-Umlaufzeitdaten [(0-RTT) data](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)), dass der Client bereits im ersten Umlauf einer Verbindung Daten an einen Server sendet, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten. Ein Client, der eine Anfrage in frühen Daten sendet, muss den `Early-Data`-Header nicht einfügen. Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

## Status

```http
425 Too Early
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
