---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Der Antwortheader, der für die Anfrage abgeglichen werden soll, deklariert im {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.excludedResponseHeaders`-Array oder {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.responseHeaders`-Array. Wenn angegeben, muss das Array nicht leer sein.

Wenn es in den `responseHeaders` der Bedingung verwendet wird, stimmt die Regel überein, wenn die Anfrage mit dieser Antwortheader-Bedingung übereinstimmt. Wenn es in den `excludedResponseHeaders` der Bedingung verwendet wird, stimmt die Regel nicht überein, wenn die Anfrage mit dieser Antwortheader-Bedingung übereinstimmt.

Jedes Objekt beschreibt einen Header, der abgeglichen oder ausgeschlossen werden soll. Um mehrere Header zu überprüfen, können mehrere Objekte in diesen Arrays oder in mehreren Regeln angegeben werden.

> [!NOTE] Die Übereinstimmung nach Headern ist eine relativ neue Funktion. Stellen Sie sicher, dass Sie die Verfügbarkeit dieser Funktion erkennen, bevor Sie sich darauf verlassen. Während einige Browser die gesamte Regel ignorieren, wenn eine nicht erkannte Bedingung vorhanden ist, hat Chrome 121 bis 127 die gesamte Regel angewendet, während es die `responseHeaders`-Bedingung ignoriert hat. Dies könnte dazu führen, dass mehr Anfragen als beabsichtigt übereinstimmen, siehe [Chromium-Issue 347186592](https://crbug.com/347186592).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers. Diese Bedingung stimmt nur dann mit dem Namen überein, wenn weder `values` noch `excludedValues` angegeben sind.
- `values` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, stimmt diese Bedingung überein, wenn der Wert des Headers mit mindestens einem Muster in dieser Liste übereinstimmt. Dies unterstützt eine fallunempfindliche Übereinstimmung von Header-Werten sowie die folgenden Konstrukte:
    - `'*'` : Entspricht einer beliebigen Anzahl von Zeichen.
    - `'?'` : Entspricht null oder einem Zeichen.
    - `'*'` und `'?'` können mit einem Rückwärts-Schrägstrich maskiert werden, z.B. `'\*'` und `'\?'`.
- `excludedValues` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, wird diese Bedingung nicht erfüllt, wenn der Header existiert, aber sein Wert mindestens ein Element in dieser Liste enthält. Dies verwendet dieselbe Glob-Muster-Syntax wie `values`. Wenn `values` und `excludedValues` beide übereinstimmen, hat `excludedValues` Vorrang.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
