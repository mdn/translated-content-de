---
title: "Node: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef}}

Das **`selectstart`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn ein Benutzer eine neue Auswahl beginnt.

Wenn das Ereignis abgebrochen wird, ändert sich die Auswahl nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// addEventListener version
document.addEventListener("selectstart", () => {
  console.log("Selection started");
});

// onselectstart version
document.onselectstart = () => {
  console.log("Selection started.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
