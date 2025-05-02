---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{AddonSidebar}}

Der Anforderungs- oder Antwort-Header, der für eine Anfrage geändert werden soll, deklariert im `rule.action.requestHeaders`-Array oder `rule.action.responseHeaders`-Array für Regeln, deren [`rule.action.type`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction#type_2) "modifyHeaders" ist.

Jedes Objekt beschreibt eine Header-Änderung. Um mehrere Header zu ändern, können mehrere Objekte in diesen Arrays oder in mehreren Regeln angegeben werden.

Die übereinstimmenden `modifyHeaders`-Regeln werden in der Reihenfolge angewendet, die unter [Matching precedence](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) beschrieben ist.
Innerhalb jeder Erweiterung werden alle `modifyHeaders`-Regeln, deren Priorität niedriger oder gleich der übereinstimmenden `allow`- oder `allowAllRequests`-Regeln ist, ignoriert.

Wenn mehrere `modifyHeaders`-Regeln denselben Header spezifizieren, wird die resultierende Änderung für den Header basierend auf der Priorität jeder Regel und den angegebenen Operationen bestimmt:

- Wenn eine Regel an einen Header angehängt wurde, können niedrigere Prioritätsregeln nur an diesen Header anhängen. `set`- und `remove`-Operationen sind nicht erlaubt.
- Wenn eine Regel einen Header gesetzt hat, können niedrigere Prioritätsregeln den Header nicht ändern, außer `append`-Regeln derselben Erweiterung.
- Wenn eine Regel einen Header entfernt hat, können niedrigere Prioritätsregeln den Header nicht ändern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten diese Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der geändert werden soll.
- `operation`
  - : Ein `string`. Die auszuführende Operation an einem Header. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Muss für `append`- und `set`-Operationen angegeben werden. Nicht erlaubt für die "remove"-Operation.

## Header-Grenzen

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

In Firefox benötigt die Erweiterung Host-Berechtigungen für den neuen Wert des `Host`-Headers.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
