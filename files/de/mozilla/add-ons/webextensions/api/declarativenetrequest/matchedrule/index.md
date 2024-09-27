---
title: declarativeNetRequest.MatchedRule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MatchedRule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das die übereinstimmende Regel beschreibt. Dieser Typ kann durch die Methoden {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} oder {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} zurückgegeben werden oder durch das Ereignis {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} beobachtet werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `extensionId`
  - : Ein `string`. Die ID der Erweiterung, falls diese Regel zu einer anderen Erweiterung gehört. Diese Eigenschaft ist nur verfügbar, wenn sie mit {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} in Verbindung mit der Option `includeOtherExtensions` auf `true` gesetzt verwendet wird.
- `ruleId`
  - : Eine `number`. Die ID der übereinstimmenden Regel.
- `rulesetId`
  - : Ein `string`. Die ID des [Regelsatzes](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rulesets), zu dem diese Regel gehört. Der zurückgegebene Wert ist:
    - Für eine Regel, die aus dem Satz der statischen Regeln stammt, der in dem Schlüssel "id" des Regelsatzes im [`declarative_net_request.rule_resources` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) angegebene Wert.
    - Für eine Regel, die aus dem Satz der dynamischen Regeln stammt, der in {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}} definierte Wert, d.h. `"_dynamic"`.
    - Für eine Regel, die aus dem Satz der Sitzungsregeln stammt, der in {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}} definierte Wert, d.h. `"_session"`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
