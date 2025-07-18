---
title: tabGroups.query
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt alle Tab-Gruppen zurück oder findet Gruppen mit bestimmten Eigenschaften.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    queryInfo                // object
);
```

### Parameter

- `queryInfo`
  - : Ein Objekt, das Details der Eigenschaften enthält, die in den zurückgegebenen Tab-Gruppen übereinstimmen sollen.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen in der Tab-Leiste eingeklappt oder ausgeklappt sind.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die die zurückgegebenen Tab-Gruppen verwenden.
    - `shared` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen freigegeben sind.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tab-Gruppen, die zurückgegeben werden sollen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in dem sich die zurückgegebenen Tab-Gruppen befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("tabGroups.TabGroup")}} Objekten erfüllt wird. Wenn die Anfrage fehlschlägt, wird das `Promise` mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
