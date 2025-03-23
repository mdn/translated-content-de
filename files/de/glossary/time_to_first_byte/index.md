---
title: Time to First Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 3ca147e302d6ea001392a2d3bbf80c9cc7ac18f7
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezieht sich auf die Zeit zwischen dem Anfordern einer Seite durch den Browser und dem Empfang des ersten Bytes an Informationen vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Abfrage und die Herstellung der Verbindung über einen {{Glossary("TCP", "TCP")}}-Handshake und einen {{Glossary("TLS", "TLS")}}-Handshake, wenn die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anfrage und dem Beginn der Antwort in Millisekunden vergeht. Dies kann mit dem `[`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)`-Attribut von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Websites, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach etwaigen Umleitungen) — und somit die 103 vorläufige Antwort. Website-Betreiber, die die Zeit bis zur endgültigen Antwort messen möchten, sollten `[`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)` verwenden, sofern es unterstützt wird.

## Siehe auch

- [Ein typischer HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
