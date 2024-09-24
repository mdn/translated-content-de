---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Der Anforderungs- oder Antwort-Header, der für eine Anfrage modifiziert werden soll, angegeben im `rule.action.requestHeaders` Array oder `rule.action.responseHeaders` Array für Regeln, bei denen {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}`.type` "modifyHeaders" ist.

Jedes Objekt beschreibt eine Header-Modifikation. Um mehrere Header zu modifizieren, können in diesen Arrays mehrere Objekte angegeben werden, oder über mehrere Regeln hinweg.

Übereinstimmende `modifyHeaders` Regeln werden in der Reihenfolge angewendet, die unter [Matching precedents](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedents) beschrieben ist. Innerhalb jeder Erweiterung werden alle `modifyHeaders` Regeln mit einer geringeren oder gleichen Priorität, die mit `allow` oder `allowAllRequests` Regeln übereinstimmen, ignoriert.

Wenn mehrere `modifyHeaders` Regeln denselben Header angeben, wird die resultierende Modifikation für den Header basierend auf der Priorität jeder Regel und den festgelegten Operationen bestimmt:

- Wenn eine Regel an einen Header angehängt wurde, dürfen Regeln mit geringerer Priorität nur an diesen Header anhängen. `set` und `remove` Operationen sind nicht erlaubt.
- Wenn eine Regel einen Header gesetzt hat, können Regeln mit geringerer Priorität den Header nicht modifizieren, außer für `append` Regeln derselben Erweiterung.
- Wenn eine Regel einen Header entfernt hat, können Regeln mit geringerer Priorität den Header nicht modifizieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der modifiziert werden soll.
- `operation`
  - : Ein `string`. Die auszuführende Operation an einem Header. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Muss für append- und set-Operationen angegeben werden. Nicht erlaubt für die "remove" Operation.

## Header-Einschränkungen

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

## Browser-Unterstützung

{{Compat}}
