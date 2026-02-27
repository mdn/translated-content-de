---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: 74109a487250280f5f4c1595e91dfb43efef544a
---

Der HTTP-Statuscode **`425 Too Early`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server nicht bereit war, ein Risiko einzugehen, um eine Anfrage zu verarbeiten, die möglicherweise erneut gesendet werden könnte, um potenzielle Replay-Angriffe zu vermeiden.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht frühe Daten (auch bekannt als Zero Round-Trip Time (0-RTT) Daten) dem Client, Daten an einen Server in der ersten Hin- und Rückfahrt einer Verbindung zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} warten zu müssen.
Ein Client, der eine Anfrage in frühen Daten sendet, muss den `Early-Data`-Header nicht einschließen.
Weitere Informationen finden Sie unter {{HTTPHeader("Early-Data")}}.

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
- [TLS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- {{HTTPHeader("Early-Data")}}
