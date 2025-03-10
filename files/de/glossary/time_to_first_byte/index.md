---
title: Time to First Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: d8d89df9fc9908787e9d0c6eb1ea091f8867e32f
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezeichnet die Zeit zwischen dem Anfordern einer Seite durch den Browser und dem Empfang des ersten Informationsbytes vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Abfrage und das Herstellen der Verbindung mittels eines {{Glossary("TCP", "TCP")}}-Handshakes und eines {{Glossary("TLS", "TLS")}}-Handshakes, falls die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anfrage und dem Beginn der Antwort in Millisekunden vergeht. Dies kann mithilfe des `[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)` Attributs von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Websites, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach etwaigen Weiterleitungen) — und somit die 103-Zwischenantwort. Website-Betreiber, die die Zeit bis zur endgültigen Antwort messen möchten, sollten `[`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)` verwenden, sofern unterstützt.

## Siehe auch

- [Ein typischer HTTP-Session](/de/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
