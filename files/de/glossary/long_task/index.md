---
title: Long task
slug: Glossary/Long_task
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Long Task** ist eine Aufgabe, die mehr als 50 ms zur Fertigstellung benötigt.

Es handelt sich um eine ununterbrochene Periode, in der der [Main-UI-Thread](/de/docs/Glossary/main_thread) für 50 ms oder länger beschäftigt ist. Häufige Beispiele sind lang laufende Ereignis-Handler, aufwendige [Reflows](/de/docs/Glossary/reflow) und andere Neudarstellungen sowie Arbeiten, die der Browser zwischen den verschiedenen Umdrehungen der Ereignisschleife ausführt und die 50 ms überschreiten.

## Siehe auch

- [Long Tasks API](/de/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
