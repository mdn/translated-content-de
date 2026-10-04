---
title: tabGroups.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Gibt alle Tab-Gruppen zurück oder sucht nach Gruppen mit bestimmten Eigenschaften.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    queryInfo                // object
);
```

### Parameter

- `queryInfo`
  - : Ein Objekt mit Angaben zu den Eigenschaftswerten, die die zurückgegebenen Tab-Gruppen erfüllen müssen.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Gibt an, ob die zurückgegebenen Tab-Gruppen in der Tableiste eingeklappt oder ausgeklappt sind.
        - In Firefox kann eine eingeklappte Gruppe den aktiven Tab enthalten. Der aktive Tab bleibt sichtbar, während inaktive Tabs eingeklappt werden.
        - In Chrome werden Gruppen vollständig eingeklappt. Wenn die Gruppe beim Einklappen den aktiven Tab enthält, wird dieser zum ersten Tab rechts neben der Gruppe verschoben. Gibt es rechts neben der Gruppe keinen Tab, wird er zum unmittelbar links neben der Gruppe befindlichen Tab verschoben.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die die zurückgegebenen Tab-Gruppen verwenden.
    - `shared` {{optional_inline}}
      - : `boolean`. Gibt an, ob die zurückgegebenen Tab-Gruppen geteilt sind.
    - `title` {{optional_inline}}
      - : `string`. Der Name der zurückzugebenden Tab-Gruppen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in dem sich die zurückgegebenen Tab-Gruppen befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekten erfüllt wird. Schlägt die Anfrage fehl, wird das Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
