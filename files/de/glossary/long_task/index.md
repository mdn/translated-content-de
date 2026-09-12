---
title: Long Task
slug: Glossary/Long_task
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

Eine **Long Task** ist eine Aufgabe, deren Ausführung mehr als 50 ms dauert.

Sie ist ein ununterbrochener Zeitraum, in dem der {{Glossary("main_thread", "Haupt-UI-Thread")}} 50 ms oder länger ausgelastet ist. Häufige Beispiele sind lang laufende Event-Handler, aufwändige {{Glossary("reflow", "Reflows")}} und andere erneute Renderings sowie Arbeit, die der Browser zwischen verschiedenen Durchläufen der Event Loop ausführt und die mehr als 50 ms dauert.

## Siehe auch

- [Long Tasks API](/de/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
