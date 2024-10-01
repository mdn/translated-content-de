---
title: Time to First Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezeichnet die Zeitspanne zwischen der Anforderung einer Seite durch den Browser und dem Empfang des ersten Bytes der Information vom Server. Diese Zeit umfasst die {{Glossary("DNS", "DNS")}}-Abfrage sowie das Herstellen der Verbindung mittels eines {{Glossary("TCP", "TCP")}}-Handshakes und eines {{Glossary("TLS", "TLS")}}-Handshakes, falls die Anfrage über {{Glossary("HTTPS", "HTTPS")}} erfolgt.

TTFB ist die Zeit, die zwischen dem Beginn der Anfrage und dem Beginn der Antwort vergeht, gemessen in Millisekunden:

```plain
TTFB = responseStart - navigationStart
```

## Siehe auch

- [Ein typisches HTTP-Sitzung](/de/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/de/docs/Web/API/PerformanceTiming)
