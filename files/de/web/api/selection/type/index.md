---
title: "Selection: type-Eigenschaft"
short-title: type
slug: Web/API/Selection/type
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die **`type`**-Eigenschaft der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle ist schreibgeschützt und gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Wert

Ein String, der den Typ der aktuellen Auswahl beschreibt. Mögliche Werte sind:

- `None`
  - : Es wurde derzeit keine Auswahl getroffen.
- `Caret`
  - : Die Auswahl ist zusammengeklappt (d.h. der Cursor befindet sich auf einem Text, aber es wurde kein Bereich ausgewählt).
- `Range`
  - : Ein Bereich wurde ausgewählt.

## Beispiele

In diesem Beispiel wird der Event-Handler jedes Mal ausgelöst, wenn eine neue Auswahl getroffen wird. `console.log(selection.type)` wird `Caret` oder `Range` zurückgeben, je nachdem, ob der Cursor an einem einzigen Punkt im Text platziert ist oder ein Bereich ausgewählt wurde.

```js
let selection;

document.onselectionchange = () => {
  console.log("New selection made");
  selection = document.getSelection();
  console.log(selection.type);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
