---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Die maximale Anzahl von statischen Regeln, die in jedem statischen Regelset deaktiviert werden können. Weitere Informationen zu den Begrenzungen von statischen Regelsätzen finden Sie unter [Begrenzungen für statische Regelsätze](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits).

Regeln werden in statischen Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} aktiviert und deaktiviert, und eine Liste der deaktivierten Regeln für ein statisches Regelset wird mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} abgerufen.

Diese Begrenzung ist:

- in Firefox: `5000`
- in Chrome: `5000`, gezählt über alle Regelsätze hinweg anstatt pro Regelsatz.
- in Safari gibt es keine Implementierung für diese Begrenzung.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
