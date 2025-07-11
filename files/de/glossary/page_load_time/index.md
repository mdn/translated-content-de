---
title: Ladezeit der Seite
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Ladezeit der Seite** ist die Zeit, die zum Laden einer Seite benötigt wird, gemessen vom [Start der Navigation](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Beginn des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadTime = time.loadEventStart - time.navigationStart;
```

Obwohl die Ladezeit der Seite als die perfekte Web-Performance-Metrik erscheinen mag, ist sie es nicht. Die Ladezeiten können je nach Benutzer stark variieren, abhängig von den Fähigkeiten des Geräts, den Netzwerkbedingungen und, in geringerem Maße, der Entfernung zum Server. Die Entwicklungsumgebung, in der die Ladezeit der Seite gemessen wird, bietet wahrscheinlich ein optimales Erlebnis, das nicht die Realität Ihrer Benutzer widerspiegelt. Darüber hinaus geht es bei der Web-Performance nicht nur darum, wann das Ladeereignis eintritt. Es geht auch um die {{Glossary("perceived_performance", "wahrgenommene Leistung")}}, Reaktionsfähigkeit, {{Glossary("jank", "Jank")}} und Jitter.

## Siehe auch

- [Navigations- und Ressourcentiming](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
