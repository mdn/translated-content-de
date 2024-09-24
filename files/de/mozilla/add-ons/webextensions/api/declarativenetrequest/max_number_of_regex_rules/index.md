---
title: deklarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_REGEX_RULES
l10n:
  sourceCommit: 787fd072f8bc00cbdf62cef85921f0a6d9f0b4a7
---

{{AddonSidebar}}

Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.

In Chrome beträgt der Wert 1000, und dieser Grenzwert wird separat für die Menge der dynamischen und sitzungsgebundenen Regeln sowie für diejenigen, die in der Regelressourcendatei angegeben sind, bewertet.

In Firefox wird dieses Limit separat pro Regelset bewertet.

In Safari gibt es kein separates Limit für die Anzahl der `regexFilter`-Regeln.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
