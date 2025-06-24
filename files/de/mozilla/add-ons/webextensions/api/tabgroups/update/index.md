---
title: tabGroups.update
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ändert den Status einer Tabgruppe.

## Syntax

```js-nolint
let updatedTabGroup = await browser.tabGroups.update(
    groupId,               // integer
    updateProperties       // object
);
```

### Parameter

- `groupId`

  - : `integer` Die ID der zu aktualisierenden Tabgruppe.

- `updateProperties`
  - : Ein Objekt, das Details zu den Eigenschaften enthält, die für diese Tabgruppe aktualisiert werden sollen. Eigenschaften, die nicht angegeben sind, werden nicht geändert.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabgruppe in der Tableiste eingeklappt oder ausgeklappt ist.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die für die Tabgruppe verwendet werden soll.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tabgruppe.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
