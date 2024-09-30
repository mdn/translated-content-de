---
title: Time to Interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**Time to Interactive** (TTI) ist ein nicht-standardisiertes Web-Performance-„Fortschritts“-Metrik, das als der Zeitpunkt definiert ist, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) abgeschlossen wurde und von 5 Sekunden Netzwerk- und Hauptthread-Inaktivität gefolgt wurde.

TTI wurde 2018 von der Web Incubator Community Group vorgeschlagen und soll eine Metrik bieten, die beschreibt, wann eine Seite oder Anwendung hilfreiche Inhalte enthält und der Hauptthread untätig ist und bereit, auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Event-Handlern.

#### Vorbehalt

TTI wird abgeleitet, indem Informationen von der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Überwachungstools verfügbar, ist TTI zum Zeitpunkt der Erstellung dieses Textes kein Teil einer offiziellen Web-Spezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive – mit Fokus auf menschengerechte Metriken](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- [Verfolgen von TTI](https://web.dev/articles/user-centric-performance-metrics#tracking_tti)
