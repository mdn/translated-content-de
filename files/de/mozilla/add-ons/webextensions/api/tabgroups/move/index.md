---
title: tabGroups.move
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/move
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Verschiebt eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster. Gruppen können nicht vor einem angehefteten Tab oder innerhalb einer anderen Tab-Gruppe verschoben werden.

## Syntax

```js-nolint
let movedTabGroup = await browser.tabGroups.move(
    groupId,                // integer
    moveProperties          // object
);
```

### Parameter

- `groupId`

  - : `integer` Die ID der zu verschiebenden Tab-Gruppe.

- `moveProperties`
  - : Ein Objekt, das Details über den Ort enthält, an den die Tab-Gruppe verschoben werden soll.
    - `index`
      - : `integer`. Die Position, an die die Gruppe verschoben werden soll. Nach dem Verschieben befindet sich der erste Tab der Tab-Gruppe an diesem Index im Tab-Streifen. Verwenden Sie -1, um die Gruppe am Ende des Fensters zu platzieren.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in das die Gruppe verschoben werden soll. Standardmäßig das Fenster, in dem sich die Gruppe befindet. Gruppen können nur in Fenster und von Fenstern des Typs {{WebExtAPIRef("windows.WindowType")}} mit dem Wert `"normal"` verschoben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anforderung fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
