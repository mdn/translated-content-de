---
title: tabGroups.update
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ändert den Zustand einer Tab-Gruppe.

## Syntax

```js-nolint
let updatedTabGroup = await browser.tabGroups.update(
    groupId,               // integer
    updateProperties       // object
);
```

### Parameter

- `groupId`
  - : `integer` Die ID der Tab-Gruppe, die aktualisiert werden soll.

- `updateProperties`
  - : Ein Objekt, das Details über die zu ändernden Eigenschaften dieser Tab-Gruppe enthält. Nicht angegebene Eigenschaften werden nicht modifiziert.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Ob die Tab-Gruppe in der Tab-Leiste eingeklappt oder ausgeklappt ist.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die für die Tab-Gruppe verwendet werden soll.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tab-Gruppe.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}} Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
