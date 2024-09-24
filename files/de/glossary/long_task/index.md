---
title: Lange Aufgabe
slug: Glossary/Long_task
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **lange Aufgabe** ist eine Aufgabe, die mehr als 50 ms zur Ausführung benötigt.

Es ist ein ununterbrochener Zeitraum, in dem der {{Glossary("main thread", "haupt UI-Thread")}} für 50 ms oder länger beschäftigt ist. Häufige Beispiele sind lang laufende Event-Handler, aufwendige {{Glossary("reflow", "Reflows")}} und andere Neu-Renderings sowie Arbeiten, die der Browser zwischen verschiedenen Durchläufen der Ereignisschleife ausführt und die 50 ms überschreiten.

## Siehe auch

- [Long Tasks API](/de/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
