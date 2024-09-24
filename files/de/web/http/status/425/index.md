---
title: 425 Zu Früh
slug: Web/HTTP/Status/425
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`425 Zu Früh`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird, um potenzielle Wiedergabe-Angriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht frühe Daten (auch bekannt als Null-Round-Trip-Zeit [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, Daten in der ersten Runde der Verbindung zu einem Server zu senden, ohne auf den Abschluss des TLS-[Handshakes](/de/docs/Glossary/TCP_handshake) zu warten. Ein Client, der eine Anfrage in frühen Daten sendet, muss nicht den `Early-Data`-Header einschließen. Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

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
