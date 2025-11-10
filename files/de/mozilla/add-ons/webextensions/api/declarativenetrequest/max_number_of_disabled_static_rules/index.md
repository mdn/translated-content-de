---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die maximale Anzahl an statischen Regeln, die in jedem statischen Regelwerk deaktiviert werden können. Weitere Informationen zu den Begrenzungen der statischen Regelwerke finden Sie unter [statische Regelwerksgrenzen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits).

Regeln werden in statischen Regelwerken mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} aktiviert und deaktiviert, und eine Liste der deaktivierten Regeln für ein statisches Regelwerk wird mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} erhalten.

Dieses Limit beträgt:

- in Firefox: `5000`
- in Chrome: `5000`, wobei alle Regelwerke zusammengezählt werden, anstatt pro Regelwerk.
- in Safari gibt es keine Implementierung für dieses Limit.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
