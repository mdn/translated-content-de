---
title: Time to First Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: db12ba7455d1897dc1ff5f5c1dbe36f6e2720805
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezieht sich auf die Zeit zwischen der Anforderung einer Seite durch den Browser und dem Empfang des ersten Bytes der Informationen vom Server. Diese Zeit umfasst das {{Glossary("DNS", "DNS")}}-Lookup und den Verbindungsaufbau mit einem {{Glossary("TCP", "TCP")}}-Handshake und einem {{Glossary("TLS", "TLS")}}-Handshake, wenn die Anforderung über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anforderung und dem Beginn der Antwort in Millisekunden vergeht. Diese kann mit dem Attribut `[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)` von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)` gemessen werden:

```javascript
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Websites, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach eventuellen Umleitungen) — also die 103 Zwischenantwort. Webseitenbetreiber, die die Zeit bis zur endgültigen Antwort messen möchten, sollten `[`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)` verwenden, wo unterstützt.

## Siehe auch

- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
