---
title: Zeit bis zur Interaktivität
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**Time to Interactive** (TTI) ist eine nicht standardisierte Web-Performance-„Fortschritts“-Metrik, die als der Zeitpunkt definiert ist, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) beendet wurde und darauf 5 Sekunden der Netzwerk- und Hauptthread-Inaktivität folgten.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, soll eine Metrik bereitstellen, die beschreibt, wann eine Seite oder Anwendung nützlichen Inhalt enthält und der Hauptthread inaktiv ist und darauf wartet, auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Ereignishandlern.

#### Vorbehalt

TTI wird abgeleitet, indem Informationen aus der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Überwachungstools verfügbar, ist TTI zum Zeitpunkt des Schreibens nicht Teil einer offiziellen Web-Spezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Zeit bis zur Interaktivität — Fokussierung auf menschenzentrierte Metriken](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- [Verfolgen von TTI](https://web.dev/articles/user-centric-performance-metrics#tracking_tti)
