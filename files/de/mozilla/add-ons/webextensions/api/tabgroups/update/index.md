---
title: tabGroups.update
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

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

  - : `integer` Die ID der zu aktualisierenden Tab-Gruppe.

- `updateProperties`
  - : Ein Objekt, das Details der zu aktualisierenden Eigenschaften dieser Tab-Gruppe enthält. Eigenschaften, die nicht angegeben sind, werden nicht verändert.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tab-Gruppe in der Tab-Leiste eingeklappt oder ausgeklappt ist.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die für die Tab-Gruppe verwendet werden soll.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tab-Gruppe.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
