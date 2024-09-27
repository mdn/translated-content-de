---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Die maximale Anzahl statischer Regeln, die in jedem statischen Regelset deaktiviert werden können. Siehe [Grenzwerte für statische Regelsets](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits) für weitere Informationen zu den Grenzwerten statischer Regelsets.

Regeln werden in statischen Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} aktiviert und deaktiviert, und eine Liste der deaktivierten Regeln für ein statisches Regelset wird mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} erhalten.

Dieses Limit ist:

- in Firefox: `5000`
- in Chrome: `5000`, gezählt über alle Regelsets statt pro Regelset.
- in Safari gibt es keine Implementierung für dieses Limit.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
