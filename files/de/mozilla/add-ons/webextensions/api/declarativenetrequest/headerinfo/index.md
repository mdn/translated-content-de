---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Antwort-Header, der mit der Anfrage übereinstimmen soll, wird im Array [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) oder im Array [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders) angegeben. Wenn angegeben, muss das Array nicht leer sein.

Wenn es in `condition responseHeaders` verwendet wird, stimmt die Regel überein, wenn die Anfrage mit dieser Antwort-Header-Bedingung übereinstimmt. Bei Verwendung in `condition excludedResponseHeaders` stimmt die Regel nicht überein, wenn die Anfrage mit dieser Antwort-Header-Bedingung übereinstimmt.

Jedes Objekt beschreibt einen Header, der übereinstimmen oder ausgeschlossen werden soll. Um mehrere Header zu überprüfen, können mehrere Objekte in diesen Arrays oder über mehrere Regeln angegeben werden.

> [!NOTE]
> Das Übereinstimmen durch Header ist ein relativ neues Feature. Stellen Sie sicher, dass dessen Verfügbarkeit entdeckt wird, bevor darauf vertraut wird. Während einige Browser die gesamte Regel ignorieren, wenn eine nicht erkannte Bedingung vorhanden ist, hat Chrome von Version 121 bis 127 die gesamte Regel angewendet, während die Bedingung `responseHeaders` ignoriert wurde. Dies könnte dazu führen, dass mehr Anfragen als beabsichtigt übereinstimmen, siehe [Chromium Issue 347186592](https://crbug.com/347186592).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers. Diese Bedingung stimmt nur dann auf den Namen überein, wenn sowohl `values` als auch `excludedValues` nicht angegeben sind.
- `values` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, stimmt diese Bedingung überein, wenn der Wert des Headers mit mindestens einem Muster in dieser Liste übereinstimmt. Dies unterstützt eine nicht auf Groß-/Kleinschreibung achtende Übereinstimmung von Header-Werten sowie die folgenden Konstrukte:
    - `'*'` : Passt auf eine beliebige Anzahl von Zeichen.
    - `'?'` : Passt auf null oder ein Zeichen.
    - `'*'` und `'?'` können mit einem Backslash maskiert werden, z.B. `'\*'` und `'\?'`.
- `excludedValues` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, wird diese Bedingung nicht erfüllt, wenn der Header existiert, aber sein Wert mindestens ein Element in dieser Liste enthält. Dies verwendet das gleiche Glob-Muster-Syntax wie `values`. Wenn sowohl `values` als auch `excludedValues` übereinstimmen, hat `excludedValues` Vorrang.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
