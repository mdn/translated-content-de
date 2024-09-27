---
title: Page Load Time
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Page Load Time** ist die Zeit, die eine Seite zum Laden benötigt, gemessen vom [Navigationsstart](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Start des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;
```

Obwohl die Ladezeit einer Seite als perfekte Metrik für die Web-Performance erscheint, ist sie es nicht. Ladezeiten können stark variieren, abhängig von den Fähigkeiten des Geräts, den Netzwerkbedingungen und, in geringerem Maße, der Entfernung zum Server. Die Entwicklungsumgebung, in der die Ladezeit der Seite gemessen wird, bietet wahrscheinlich eine optimale Erfahrung, die nicht der Realität Ihrer Nutzer entspricht. Darüber hinaus geht es bei der Web-Performance nicht nur darum, wann das Ladeereignis eintritt. Es geht auch um die [wahrgenommene Leistung](/de/docs/Glossary/perceived_performance), Reaktionsfähigkeit, [Jank](/de/docs/Glossary/jank) und Ruckeln.

## Siehe auch

- [Navigation und Ressourcentiming](/de/docs/Web/Performance/Navigation_and_resource_timings)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
