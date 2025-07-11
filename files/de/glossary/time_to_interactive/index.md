---
title: Time to Interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Time to Interactive** (TTI) ist eine nicht standardisierte Messgröße für die Web-Performance im Sinne eines 'Fortschritts', die als der Zeitpunkt definiert ist, wenn die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) beendet wurde und darauf 5 Sekunden Netzwerk- und Hauptthread-Inaktivität folgten.

TTI wurde 2018 von der Web Incubator Community Group vorgeschlagen, um eine Messgröße bereitzustellen, die beschreibt, wann eine Seite oder Anwendung nützliche Inhalte enthält und der Hauptthread frei sowie bereit ist, auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Event-Handlern.

#### Hinweis

TTI wird abgeleitet, indem Informationen aus der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Überwachungstools verfügbar, ist TTI kein Bestandteil einer offiziellen Web-Spezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — focusing on human-centric metrics](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- {{Glossary("Time_to_first_byte", "Time to first byte (TTFB)")}}
