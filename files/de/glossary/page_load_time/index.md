---
title: Seitenladezeit
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

**Seitenladezeit** ist die Zeit, die benötigt wird, um eine Seite zu laden, gemessen vom [Navigationsstart](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Beginn des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadTime = time.loadEventStart - time.navigationStart;
```

Obwohl die Seitenladezeit wie die perfekte Web-Performance-Metrik erscheint, ist sie es nicht. Ladezeiten können stark zwischen Benutzern variieren, abhängig von den Gerätefähigkeiten, den Netzwerkbedingungen und, in geringerem Maße, der Entfernung zum Server. Das Entwicklungsumfeld, in dem die Seitenladezeit gemessen wird, bietet wahrscheinlich eine optimale Erfahrung, die nicht die Realität Ihrer Benutzer widerspiegelt. Außerdem bezieht sich Web-Performance nicht nur darauf, wann das Ladeereignis stattfindet. Es geht auch um die {{Glossary("perceived_performance", "wahrgenommene Performance")}}, Reaktionsfähigkeit, {{Glossary("jank", "Ruckeln")}} und Zittern.

## Siehe auch

- [Navigations- und Ressourcentiming](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
