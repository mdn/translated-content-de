---
title: Zeit bis zum ersten Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezieht sich auf die Zeitspanne zwischen der Anforderung einer Seite durch den Browser und dem Empfang des ersten Bytes an Informationen vom Server. Diese Zeit umfasst die {{Glossary("DNS")}}-Auflösung und die Herstellung der Verbindung mithilfe eines {{Glossary("TCP")}}-Handshakes und eines {{Glossary("TLS")}}-Handshakes, wenn die Anforderung über {{Glossary("HTTPS")}} erfolgt.

TTFB ist die Zeitspanne zwischen dem Beginn der Anforderung und dem Beginn der Antwort, gemessen in Millisekunden:

```plain
TTFB = responseStart - navigationStart
```

## Siehe auch

- [Ein typischer HTTP-Session](/de/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/de/docs/Web/API/PerformanceTiming)
