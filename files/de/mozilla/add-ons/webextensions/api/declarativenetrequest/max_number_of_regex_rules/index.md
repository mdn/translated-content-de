---
title: declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_REGEX_RULES
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die maximale Anzahl von regulären Ausdruchsregeln, die eine Erweiterung hinzufügen kann.

In Chrome beträgt der Wert 1000, und dieses Limit wird separat für die Menge der dynamischen und sitzungsabhängigen Regeln sowie für diejenigen, die in der Regelressourcendatei angegeben sind, bewertet.

In Firefox wird dieses Limit für jedes Regelset separat bewertet.

In Safari gibt es kein separates Limit für die Anzahl der `regexFilter`-Regeln.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
