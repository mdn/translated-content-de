---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
l10n:
  sourceCommit: 9156c03a71d64ed2fdba4e94d651e4c745660f24
---

{{AddonSidebar}}

Details der Aktion, die durchgeführt werden soll, wenn eine Regel übereinstimmt, als die `action`-Eigenschaft einer {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}. Beschreibt, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Anfrage-Header, die für die Anfrage modifiziert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Antwort-Header, die für die Anfrage modifiziert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `type`
  - : Ein `string`. Der Typ der auszuführenden Aktion. Mögliche Werte sind `"block"`, `"redirect"`, `"allow"`, `"upgradeScheme"`, `"modifyHeaders"` und `"allowAllRequests"`. Die Verwendung der Aktionen `"redirect"` und `"modifyHeaders"` erfordert [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Anfrage und den Anfange initiator. Die Aktionen "block" und "upgradeScheme" erfordern ebenfalls Host-Berechtigungen, es sei denn, die Berechtigung "declarativeNetRequest" ist angegeben. Ohne diese Berechtigungen werden übereinstimmende Regeln ignoriert. Weitere Informationen finden Sie unter [Berechtigungen bei declarativeNetRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions). Weitere Details zu den Auswirkungen von Regelaktionen finden Sie in [Matching precedence](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence).

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
