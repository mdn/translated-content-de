---
title: Seitenladezeit
slug: Glossary/Page_load_time
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GlossarySidebar}}

Die **Seitenladezeit** ist die Zeit, die zum Laden einer Seite benötigt wird, gemessen vom [Navigation Start](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Beginn des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadTime = time.loadEventStart - time.navigationStart;
```

Obwohl die Seitenladezeit wie die perfekte Web-Performance-Metrik klingt, ist sie es nicht. Die Ladezeiten können stark variieren, je nach Gerät, Netzbedingungen und in geringerem Maße der Entfernung zum Server. Die Entwicklungsumgebung, in der die Seitenladezeit gemessen wird, ist wahrscheinlich eine optimale Erfahrung und spiegelt nicht die Realität Ihrer Benutzer wider. Darüber hinaus geht es bei Web-Performance nicht nur darum, wann das Ladeereignis eintritt. Es geht auch um die {{Glossary("perceived_performance", "wahrgenommene Leistung")}}, Reaktionsfähigkeit, {{Glossary("jank", "Ruckeln")}} und Zittern.

## Siehe auch

- [Navigation und Ressourcentiming](/de/docs/Web/Performance/Navigation_and_resource_timings)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
