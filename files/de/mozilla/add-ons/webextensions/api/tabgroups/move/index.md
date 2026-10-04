---
title: tabGroups.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/move
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Verschiebt eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster. Gruppen können nicht vor einen angehefteten Tab oder in eine andere Tab-Gruppe verschoben werden.

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
  - : Ein Objekt mit Angaben dazu, wohin die Tab-Gruppe verschoben werden soll.
    - `index`
      - : `integer`. Die Position, an die die Gruppe verschoben werden soll. Nach dem Verschieben befindet sich der erste Tab der Tab-Gruppe an diesem Index in der Tableiste. Verwenden Sie -1, um die Gruppe am Ende des Fensters zu platzieren.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in das die Gruppe verschoben werden soll. Standardmäßig wird das Fenster verwendet, in dem sich die Gruppe befindet. Gruppen können nur zwischen Fenstern des Typs `"normal"` gemäß {{WebExtAPIRef("windows.WindowType")}} verschoben werden.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
