---
title: Long task
slug: Glossary/Long_task
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **long task** ist eine Aufgabe, die mehr als 50ms zur Fertigstellung benötigt.

Es handelt sich um eine ununterbrochene Zeitspanne, in der der {{Glossary("main_thread", "Haupt-UI-Thread")}} 50 ms oder länger ausgelastet ist. Häufige Beispiele sind lang laufende Ereignishandler, aufwendige {{Glossary("reflow", "Reflows")}} und andere Neudarstellungen sowie Arbeiten, die der Browser zwischen verschiedenen Runden der Ereignisschleife ausführt und die länger als 50 ms dauern.

## Siehe auch

- [Long Tasks API](/de/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
