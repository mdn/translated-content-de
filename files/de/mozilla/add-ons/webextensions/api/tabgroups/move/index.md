---
title: tabGroups.move
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/move
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verschiebt eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster. Gruppen können nicht vor einem fixierten Tab oder innerhalb einer anderen Tab-Gruppe verschoben werden.

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
  - : Ein Objekt, das Details zum Zielort enthält, wohin die Tab-Gruppe verschoben werden soll.
    - `index`
      - : `integer`. Die Position, an die die Gruppe verschoben werden soll. Nach der Verschiebung befindet sich der erste Tab der Tab-Gruppe an diesem Index in der Tab-Leiste. Verwenden Sie -1, um die Gruppe am Ende des Fensters zu platzieren.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in das die Gruppe verschoben werden soll. Standardmäßig ist es das Fenster, in dem sich die Gruppe befindet. Gruppen können nur in Fenster mit dem {{WebExtAPIRef("windows.WindowType")}}-Typ `"normal"` verschoben werden und von dort aus.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
