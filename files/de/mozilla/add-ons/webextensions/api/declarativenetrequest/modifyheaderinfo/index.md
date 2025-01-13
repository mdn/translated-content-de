---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 9156c03a71d64ed2fdba4e94d651e4c745660f24
---

{{AddonSidebar}}

Der Anforderungs- oder Antwortheader, der für eine Anfrage geändert werden soll, deklariert im `rule.action.requestHeaders` Array oder `rule.action.responseHeaders` Array für Regeln, deren {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}`.type` "modifyHeaders" ist.

Jedes Objekt beschreibt eine Header-Änderung. Um mehrere Header zu ändern, können mehrere Objekte in diesen Arrays oder über mehrere Regeln hinweg angegeben werden.

Entsprechende `modifyHeaders` Regeln werden in der Reihenfolge angewendet, die unter [Matching precedence](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) beschrieben wird. Innerhalb jeder Erweiterung werden alle `modifyHeaders` Regeln mit einer Priorität niedriger oder gleich den entsprechenden `allow` oder `allowAllRequests` Regeln ignoriert.

Wenn mehrere `modifyHeaders` Regeln denselben Header spezifizieren, wird die resultierende Änderung des Headers basierend auf der Priorität der einzelnen Regeln und den angegebenen Operationen bestimmt:

- Wenn eine Regel einem Header hinzugefügt wurde, können Regeln mit niedrigerer Priorität nur zu diesem Header hinzufügen. `set`- und `remove`-Operationen sind nicht erlaubt.
- Wenn eine Regel einen Header gesetzt hat, können Regeln mit niedrigerer Priorität den Header nicht ändern, außer für `append`-Regeln aus derselben Erweiterung.
- Wenn eine Regel einen Header entfernt hat, können Regeln mit niedrigerer Priorität den Header nicht ändern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der geändert werden soll.
- `operation`
  - : Ein `string`. Die Operation, die an einem Header durchgeführt werden soll. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Muss für die Operationen `append` und `set` angegeben werden. Nicht erlaubt für die `"remove"`-Operation.

## Header-Beschränkungen

In Chrome wird `"append"` für die folgenden Anforderungs-Header unterstützt:

- `Accept`
- `Accept-Encoding`
- `Accept-Language`
- `Access-Control-Request-Headers`
- `Cache-Control`
- `Connection`
- `Content-Language`
- `Cookie`
- `Forwarded`
- `If-Match`
- `If-None-Match`
- `Keep-Alive`
- `Range`
- `Te`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Want-Digest`
- `X-Forwarded-For`

In Firefox benötigt die Erweiterung Host-Berechtigungen für den neuen Wert des `Host` Headers.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
