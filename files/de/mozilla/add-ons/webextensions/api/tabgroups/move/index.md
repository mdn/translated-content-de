---
title: tabGroups.move
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/move
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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
  - : Ein Objekt, das Details zum Zielort enthält, an den die Tab-Gruppe verschoben werden soll.
    - `index`
      - : `integer`. Die Position, zu der die Gruppe verschoben werden soll. Nach dem Verschieben befindet sich der erste Tab der Tab-Gruppe an diesem Index im Tab-Streifen. Verwenden Sie -1, um die Gruppe am Ende des Fensters zu platzieren.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, zu dem die Gruppe verschoben werden soll. Standardmäßig wird das Fenster verwendet, in dem sich die Gruppe befindet. Gruppen können nur zu und von Fenstern mit dem {{WebExtAPIRef("windows.WindowType")}} Typ `"normal"` verschoben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem {{WebExtAPIRef("tabGroups.TabGroup")}} Objekt erfüllt wird. Sollte die Anfrage fehlschlagen, wird das Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
