---
title: Time to First Byte
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) bezieht sich auf die Zeit zwischen der Anforderung einer Seite durch den Browser und dem Empfang des ersten Bytes an Informationen vom Server. Diese Zeit umfasst die [DNS](/de/docs/Glossary/DNS)-Abfrage und das Herstellen der Verbindung mittels eines [TCP](/de/docs/Glossary/TCP)-Handshakes und eines [TLS](/de/docs/Glossary/TLS)-Handshakes, falls die Anfrage über [HTTPS](/de/docs/Glossary/HTTPS) erfolgt.

TTFB ist die Zeit, die zwischen dem Start der Anforderung und dem Start der Antwort in Millisekunden vergeht:

```plain
TTFB = responseStart - navigationStart
```

## Siehe auch

- [Eine typische HTTP-Session](/de/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/de/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/de/docs/Web/API/PerformanceTiming)
