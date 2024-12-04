---
title: Time to interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: b78adc37c4a126ae8d213cd682ad1c6e8af199bf
---

{{GlossarySidebar}}

**Time to Interactive** (TTI) ist ein nicht standardisiertes Webleistungskennzahl ('progress' metric), das als der Zeitpunkt definiert wird, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) beendet wurde und von 5 Sekunden ohne Netzwerk- und Hauptthread-Aktivität gefolgt wird.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, soll ein Kennzahl bereitstellen, das beschreibt, wann eine Seite oder Anwendung nützliche Inhalte enthält und der Hauptthread inaktiv ist und bereit ist, auf Benutzerinteraktionen zu reagieren, einschließlich des Registrierens von Ereignishandlern.

#### Einschränkung

TTI wird abgeleitet, indem Informationen aus der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl TTI in einigen Leistungsüberwachungstools verfügbar ist, ist es zum Zeitpunkt des Schreibens nicht Teil einer offiziellen Webspezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — focusing on human-centric metrics](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
