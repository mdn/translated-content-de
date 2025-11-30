---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP-Statuscode **`425 Too Early`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird, um mögliche Wiederholungsangriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht frühe Daten (auch bekannt als Null-Rundreisezeit [(0-RTT)-Daten](/de/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)) es dem Client, Daten an einen Server in der ersten Rundreise einer Verbindung zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten. Ein Client, der eine Anfrage in frühen Daten sendet, muss den `Early-Data`-Header nicht einschließen. Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

## Status

```http
425 Too Early
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Reference/Status)
- [TLS 1.3](/de/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
