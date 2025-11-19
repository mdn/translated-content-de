---
title: Time to Interactive (TTI)
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**Time to Interactive** (**TTI**) ist ein nicht standardisierter Web-Performance-'Fortschritts'-Metrik, der als der Zeitpunkt definiert ist, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) abgeschlossen ist und auf die eine 5-sekündige Inaktivität des Netzwerkes und des Haupt-Threads folgt.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, sollte eine Metrik bieten, die beschreibt, wann eine Seite oder Anwendung nützliche Inhalte enthält und der Haupt-Thread inaktiv und bereit ist, auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Ereignis-Handlern.

## Vorbehalt

TTI wird abgeleitet, indem Informationen aus der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Überwachungstools verfügbar, ist TTI kein Teil einer offiziellen Web-Spezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — Fokussierung auf menschzentrierte Metriken](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- {{Glossary("Time_to_first_byte", "Time to first byte (TTFB)")}}
