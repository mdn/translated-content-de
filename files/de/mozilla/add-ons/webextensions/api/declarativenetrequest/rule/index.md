---
title: declarativeNetRequest.Rule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das Objekt beschreibt die Aktionen, die für übereinstimmende Anfragen ausgeführt werden sollen. Diese können in den statischen Regelressourcen angegeben werden, die durch den [manifest.json `declarative_net_request` Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) verknüpft sind, oder dynamischer über die Methoden {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateSessionRules")}}.

Für weitere Informationen über Regeln siehe [Regeln](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules) auf der API-Übersichtsseite.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `action`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}. Die Aktion, die durchgeführt werden soll, wenn diese Regel zutrifft.
- `condition`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}. Die Bedingung, unter der diese Regel ausgelöst wird.
- `id`
  - : `number`. Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Pflichtfeld und sollte >= 1 sein.
- `priority` {{optional_inline}}
  - : `number`. Regelpriorität. Standardwert ist 1. Sollte, wenn angegeben, >= 1 sein. Siehe [Priorität der Übereinstimmung](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) für Details darüber, wie die Priorität beeinflusst, welche Regeln angewendet werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
