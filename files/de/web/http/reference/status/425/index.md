---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`425 Too Early`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, das Risiko einzugehen, eine Anforderung zu verarbeiten, die möglicherweise wiederholt werden könnte, um potenzielle Replay-Angriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es frühzeitige Daten (auch als Zero Round-Trip Time [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) bekannt), dass der Client in der ersten Runde einer Verbindung Daten an einen Server sendet, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten. Ein Client, der eine Anfrage in frühzeitigen Daten sendet, muss den `Early-Data`-Header nicht einschließen. Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

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
