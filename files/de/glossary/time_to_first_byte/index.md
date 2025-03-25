---
title: Time to first byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezieht sich auf die Zeit zwischen der Anforderung einer Seite durch den Browser und dem Empfang des ersten Bytes an Informationen vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Abfrage und das Herstellen der Verbindung mittels eines {{Glossary("TCP", "TCP")}}-Handshakes sowie eines {{Glossary("TLS", "TLS")}}-Handshakes, falls die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anfrage und dem Beginn der Antwort vergeht, gemessen in Millisekunden. Dies kann mithilfe des [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)-Attributs von [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gemessen werden:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Für Seiten, die {{HTTPStatus("103", "103 Early Hints")}} verwenden, ist TTFB typischerweise die _ersten Bytes_ (nach eventuellen Weiterleitungen) – und somit die 103-Zwischenantwort. Seitenbetreiber, die die Zeit bis zur endgültigen Antwort messen möchten, sollten [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) verwenden, sofern dies unterstützt wird.

## Siehe auch

- [Ein typischer HTTP-Session](/de/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
