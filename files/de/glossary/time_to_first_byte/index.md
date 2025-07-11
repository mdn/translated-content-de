---
title: Time to first byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Time to First Byte** (TTFB) bezieht sich auf die Zeit zwischen dem Anfordern einer Seite durch den Browser und dem Empfang des ersten Bytes der Information vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Abfrage und das Herstellen der Verbindung mittels eines {{Glossary("TCP", "TCP")}}-Handshakes und eines {{Glossary("TLS", "TLS")}}-Handshakes, falls die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit zwischen dem Beginn der Anfrage und dem Beginn der Antwort, gemessen in Millisekunden. Dies kann mit dem [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)-Attribut von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Seiten, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, sind TTFB typischerweise die _ersten Bytes_ (nach etwaigen Umleitungen) — also die 103-Zwischenantwort. Website-Besitzer, die die Zeit bis zur endgültigen Antwort messen möchten, sollten [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) verwenden, sofern unterstützt.

## Siehe auch

- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
