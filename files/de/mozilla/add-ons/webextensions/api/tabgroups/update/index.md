---
title: tabGroups.update
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
l10n:
  sourceCommit: 0ddea08f7bbefccc38ae86977a2d138420cc8a67
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
  - : Ein Objekt, das Details zu den Eigenschaften enthält, die für diese Tab-Gruppe aktualisiert werden sollen. Eigenschaften, die nicht angegeben sind, werden nicht geändert.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tab-Gruppe im Tab-Streifen zusammengeklappt oder erweitert ist.
        Wenn der aktive Tab sich in einer Gruppe befindet, die zusammengeklappt ist:
        - In Firefox bleibt der Tab aktiv und nur die inaktiven Tabs werden zusammengeklappt.
        - In Chrome wird der aktive Tab zum ersten Tab rechts von der Gruppe verschoben. Wenn es keinen Tab rechts von der Gruppe gibt, wird er direkt zum Tab links von der Gruppe verschoben.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die für die Tab-Gruppe verwendet werden soll.
    - `title` {{optional_inline}}
      - : `string`. Der Name der Tab-Gruppe.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
