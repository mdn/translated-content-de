---
title: Time to First Byte (TTFB)
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

**Time to First Byte** (**TTFB**) bezeichnet die Zeit zwischen dem Anfordern einer Seite durch den Browser und dem Empfang des ersten Bytes von Informationen vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Auflösung und das Herstellen der Verbindung mit einem {{Glossary("TCP", "TCP")}}-Handshake und einem {{Glossary("TLS", "TLS")}}-Handshake, wenn die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit zwischen dem Beginn der Anfrage und dem Beginn der Antwort, gemessen in Millisekunden. Dies kann mit dem [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)-Attribut von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Websites, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach etwaigen Umleitungen) – also die 103 Zwischenantwort. Website-Betreiber, die die Zeit bis zur endgültigen Antwort messen möchten, sollten [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) verwenden, sofern unterstützt.

## Siehe auch

- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
