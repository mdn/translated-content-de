---
title: Seitenladezeit
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Seitenladezeit** ist die Zeit, die eine Seite zum Laden benötigt, gemessen vom [Start der Navigation](/de/docs/Web/API/PerformanceTiming/navigationStart) bis zum [Beginn des Ladeereignisses](/de/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;
```

Auch wenn die Seitenladezeit wie die perfekte Web-Performance-Metrik klingt, ist sie das nicht. Die Ladezeiten können zwischen den Nutzern stark variieren, abhängig von den Geräteleistungen, Netzwerkbedingungen und, in geringerem Maße, der Entfernung zum Server. Die Entwicklungsumgebung, in der die Seitenladezeit gemessen wird, ist wahrscheinlich eine optimale Erfahrung und spiegelt nicht die Realität Ihrer Nutzer wider. Darüber hinaus geht es bei der Web-Performance nicht nur darum, wann das Ladeereignis eintritt. Es geht auch um {{Glossary("perceived performance")}}, Reaktionsfähigkeit, {{Glossary("jank")}} und Ruckeln.

## Siehe auch

- [Navigation und Ressourcentiming](/de/docs/Web/Performance/Navigation_and_resource_timings)
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}},
