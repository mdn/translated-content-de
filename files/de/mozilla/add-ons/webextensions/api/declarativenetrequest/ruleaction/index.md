---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Details der Aktion, die ausgeführt wird, wenn eine Regel übereinstimmt, als die `action`-Eigenschaft eines {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}. Beschreibt, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Anforderungsheader, die für die Anfrage geändert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Antwortheader, die für die Anfrage geändert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `type`
  - : Ein `string`. Der Typ der Aktion, die ausgeführt werden soll. Mögliche Werte sind `"block"`, `"redirect"`, `"allow"`, `"upgradeScheme"`, `"modifyHeaders"` und `"allowAllRequests"`. Die Verwendung der `"redirect"`- und `"modifyHeaders"`-Aktionen erfordert [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Anfrage und den Anfragesteller. Die "block"- und "upgradeScheme"-Aktionen erfordern ebenfalls Host-Berechtigungen, es sei denn, die "declarativeNetRequest"-Berechtigung ist angegeben. Ohne diese Berechtigungen werden übereinstimmende Regeln ignoriert. Siehe [Berechtigungen bei declarativeNetRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions) für weitere Informationen. Mehr Details über die Auswirkungen von Regelaktionen sind in [Übereinstimmungsrangfolge](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) zu finden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
