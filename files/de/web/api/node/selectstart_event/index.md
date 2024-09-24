---
title: "Node: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef}}

Das **`selectstart`**-Ereignis der [Selection-API](/de/docs/Web/API/Selection) wird ausgelöst, wenn ein Benutzer eine neue Auswahl beginnt.

Wenn das Ereignis abgebrochen wird, ändert sich die Auswahl nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
// addEventListener-Version
document.addEventListener("selectstart", () => {
  console.log("Selection started");
});

// onselectstart-Version
document.onselectstart = () => {
  console.log("Selection started.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document/selectionchange_event", "selectionchange")}}
