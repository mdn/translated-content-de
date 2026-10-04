---
title: tabGroups.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Ändert den Zustand einer Tabgruppe.

## Syntax

```js-nolint
let updatedTabGroup = await browser.tabGroups.update(
    groupId,               // integer
    updateProperties       // object
);
```

### Parameter

- `groupId`
  - : `integer` Die ID der Tabgruppe, die aktualisiert werden soll.

- `updateProperties`
  - : Ein Objekt mit Angaben zu den Eigenschaften, die für diese Tabgruppe aktualisiert werden sollen. Nicht angegebene Eigenschaften bleiben unverändert.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabgruppe in der Tableiste eingeklappt oder ausgeklappt ist.
        Wenn sich der aktive Tab in einer eingeklappten Gruppe befindet:
        - In Firefox bleibt der Tab aktiv; nur die inaktiven Tabs werden eingeklappt.
        - In Chrome wird der aktive Tab auf den ersten Tab rechts neben der Gruppe verschoben. Befindet sich dort kein Tab, wird er auf den Tab unmittelbar links neben der Gruppe verschoben.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe für die Tabgruppe.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tabgruppe.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Schlägt die Anfrage fehl, wird das Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
