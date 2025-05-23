---
title: tabGroups.query
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Gibt alle Tab-Gruppen zurück oder findet Gruppen mit bestimmten Eigenschaften.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    queryInfo                // object
);
```

### Parameter

- `queryInfo`
  - : Ein Objekt, das Details der Eigenschaftswerte enthält, die in den zurückgegebenen Tab-Gruppen übereinstimmen sollen.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen im Tab-Streifen eingeklappt oder ausgeklappt sind.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die von den zurückgegebenen Tab-Gruppen verwendet wird.
    - `shared` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen gemeinsam genutzt werden.
    - `title` {{optional_inline}}
      - : `string`. Der Name der zurückzugebenden Tab-Gruppen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in dem sich die zurückgegebene Tab-Gruppe befindet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekten erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
