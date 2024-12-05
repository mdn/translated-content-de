---
title: Time to Interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: ebf783dc02e55a838a61c3faedc03e7f06c22ace
---

{{GlossarySidebar}}

**Time to Interactive** (TTI) ist eine nicht standardisierte 'Fortschritt'-Metrik der Web-Performance, die als der Zeitpunkt definiert ist, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) beendet wurde und anschließend 5 Sekunden lang keine Netzwerk- oder Hauptthread-Aktivität stattfand.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, sollte eine Metrik bereitstellen, die beschreibt, wann eine Seite oder Anwendung nützlichen Inhalt enthält und der Hauptthread inaktiv und frei ist, um auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Ereignis-Handlern.

#### Vorbehalt

TTI wird abgeleitet, indem Informationen aus der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl in einigen Performance-Monitoring-Tools verfügbar, ist TTI kein Bestandteil einer offiziellen Webspezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — focusing on human-centric metrics](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- {{Glossary("Time_to_first_byte", "Time to first byte (TTFB)")}}
