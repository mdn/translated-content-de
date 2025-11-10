---
title: Time to Interactive (TTI)
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

**Time to Interactive** (**TTI**) ist ein nicht-standardisierter Web-Performance-'Fortschritts'-Metrik, der als der Zeitpunkt definiert ist, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) abgeschlossen wurde und anschließend 5 Sekunden keine Aktivität im Netzwerk und im Hauptthread stattfand.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, sollte eine Metrik bereitstellen, die beschreibt, wann eine Seite oder Anwendung nützlichen Inhalt enthält und der Hauptthread frei ist, um auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Event-Handlern.

#### Einschränkung

TTI wird abgeleitet, indem Informationen von der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Monitoring-Tools verfügbar, ist TTI kein Teil einer offiziellen Web-Spezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — fokussieren auf menschengerechte Metriken](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- {{Glossary("Time_to_first_byte", "Time to first byte (TTFB)")}}
