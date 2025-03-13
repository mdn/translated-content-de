---
title: Time to first byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezeichnet die Zeit zwischen dem Moment, in dem der Browser eine Seite anfordert, und dem Moment, in dem er das erste Byte von Informationen vom Server erhält. Diese Zeit beinhaltet die {{Glossary("DNS", "DNS")}}-Abfrage und das Herstellen der Verbindung mittels eines {{Glossary("TCP", "TCP")}}-Handshakes und gegebenenfalls eines {{Glossary("TLS", "TLS")}}-Handshakes, wenn die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anfrage und dem Beginn der Antwort in Millisekunden vergeht. Dies kann mit dem Attribut `[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)` von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)` gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Websites, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach allen Umleitungen) — und somit die 103-Zwischenantwort. Website-Besitzer, die die Zeit bis zur endgültigen Antwort messen möchten, sollten `[`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)` verwenden, sofern dies unterstützt wird.

## Siehe auch

- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
