---
title: "Knoten: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

Das **`selectstart`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn ein Benutzer eine neue Auswahl beginnt.

Wenn das Ereignis abgebrochen wird, wird die Auswahl nicht geändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("selectstart", (event) => { })

onselectstart = (event) => { }
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
