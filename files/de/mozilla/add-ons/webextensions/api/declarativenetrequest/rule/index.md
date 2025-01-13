---
title: declarativeNetRequest.Rule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule
l10n:
  sourceCommit: 9156c03a71d64ed2fdba4e94d651e4c745660f24
---

{{AddonSidebar}}

Das Objekt, das die auszuführenden Aktionen für übereinstimmende Anfragen beschreibt. Diese können in den statischen Regelressourcen spezifiziert werden, die durch den [Schlüssel `declarative_net_request` in der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) verlinkt sind, oder dynamischer über die Methoden {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateSessionRules")}}.

Weitere Informationen zu Regeln finden Sie in den [Regeln](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules) auf der API-Übersichtsseite.

## Typ

Werte dieses Typs sind Objekte. Diese enthalten die folgenden Eigenschaften:

- `action`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}. Die Aktion, die ausgeführt werden soll, wenn diese Regel übereinstimmt.
- `condition`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}. Die Bedingung, unter der diese Regel ausgelöst wird.
- `id`
  - : `number`. Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Pflichtfeld und sollte >= 1 sein.
- `priority` {{optional_inline}}
  - : `number`. Regelpriorität. Standardmäßig 1. Wenn angegeben, sollte sie >= 1 sein. Siehe [Übereinstimmungspriorität](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
