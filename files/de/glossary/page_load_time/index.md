---
title: Page load time
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Page load time** ist die Zeit, die eine Seite benötigt, um zu laden, gemessen vom [navigation start](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Start des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;
```

Obwohl die Seitenladezeit wie die perfekte Web-Performance-Metrik klingt, ist sie das nicht. Ladezeiten können zwischen Benutzern stark variieren, je nach Gerätefähigkeiten, Netzwerkbedingungen und, in geringerem Maße, Entfernung vom Server. Die Entwicklungsumgebung, in der die Seitenladezeit gemessen wird, bietet wahrscheinlich ein optimales Erlebnis, das nicht die Realität Ihrer Benutzer widerspiegelt. Darüber hinaus geht es bei der Web-Performance nicht nur darum, wann das Ladeereignis auftritt, sondern auch um {{Glossary("perceived_performance", "wahrgenommene Leistung")}}, Reaktionsfähigkeit, {{Glossary("jank", "Ruckeln")}} und Zittern.

## Siehe auch

- [Navigation und Ressourcen-Timing](/de/docs/Web/Performance/Navigation_and_resource_timings)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
