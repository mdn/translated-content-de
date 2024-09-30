---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Die maximale Anzahl an statischen Regeln, die in jedem statischen Regelsatz deaktiviert werden können. Weitere Informationen zu den Begrenzungen von statischen Regelsätzen finden Sie unter [statische Regelsatzgrenzen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits).

Regeln werden in statischen Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} aktiviert und deaktiviert. Eine Liste der deaktivierten Regeln für einen statischen Regelsatz wird mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}} erhalten.

Dieses Limit beträgt:

- in Firefox: `5000`
- in Chrome: `5000`, wobei über alle Regelsätze hinweg gezählt wird, anstatt pro Regelsatz.
- in Safari gibt es keine Implementierung für diese Begrenzung.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
