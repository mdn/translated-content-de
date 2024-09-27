---
title: Time to Interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**Time to Interactive** (TTI) ist eine nicht-standardisierte Webleistungskennzahl, die als der Zeitpunkt definiert wird, an dem die letzte [Long Task](/de/docs/Web/API/PerformanceLongTaskTiming) beendet wurde und von 5 Sekunden Inaktivität im Netzwerk und Haupt-Thread gefolgt ist.

TTI, vorgeschlagen von der Web Incubator Community Group im Jahr 2018, soll eine Metrik bereitstellen, die beschreibt, wann eine Seite oder Anwendung nützliche Inhalte enthält und der Haupt-Thread inaktiv und bereit ist, um auf Benutzerinteraktionen zu reagieren, einschließlich der Registrierung von Ereignis-Handlern.

#### Vorbehalt

TTI wird abgeleitet, indem Informationen von der [Long Task API](/de/docs/Web/API/PerformanceLongTaskTiming) genutzt werden. Obwohl TTI in einigen Leistungsüberwachungstools verfügbar ist, ist es zum Zeitpunkt der Erstellung dieses Textes kein Teil irgendeiner offiziellen Webspezifikation.

## Siehe auch

- [Definition von TTI](https://github.com/WICG/time-to-interactive) von der Web Incubator Community Group
- [Time to Interactive — Fokus auf benutzerzentrierte Metriken](https://calibreapp.com/blog/time-to-interactive) von Radimir Bitsov
- [Verfolgung von TTI](https://web.dev/articles/user-centric-performance-metrics#tracking_tti)
