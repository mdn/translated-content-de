---
title: Lange Aufgabe
slug: Glossary/Long_task
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **lange Aufgabe** ist eine Aufgabe, die mehr als 50ms zur Ausführung benötigt.

Es handelt sich um eine ununterbrochene Periode, in der der {{Glossary("main_thread", "Haupt-UI-Thread")}} für 50 ms oder länger beschäftigt ist. Häufige Beispiele sind lang andauernde Event-Handler, aufwendige {{Glossary("reflow", "Reflows")}} und andere Neurenderings sowie Arbeiten, die der Browser zwischen verschiedenen Umdrehungen der Ereignisschleife durchführt und die mehr als 50 ms dauern.

## Siehe auch

- [Long Tasks API](/de/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
