---
title: "Selection: type-Eigenschaft"
short-title: type
slug: Web/API/Selection/type
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("DOM")}}

Die **`type`**-Eigenschaft, eine schreibgeschützte Eigenschaft des
{{domxref("Selection")}}-Interfaces, gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Wert

Ein String, der den Typ der aktuellen Auswahl beschreibt. Mögliche
Werte sind:

- `None`
  - : Es wurde aktuell keine Auswahl getroffen.
- `Caret`
  - : Die Auswahl ist zusammengeklappt (d.h. der Cursor ist an einem
    Text platziert, aber es wurde kein Bereich ausgewählt).
- `Range`
  - : Ein Bereich wurde ausgewählt.

## Beispiele

In diesem Beispiel wird der Ereignishandler jedes Mal ausgelöst, wenn eine neue Auswahl getroffen wird.
`console.log(selection.type)` gibt `Caret` oder
`Range` zurück, abhängig davon, ob der Cursor an einem einzelnen Punkt im
Text platziert ist oder ein Bereich ausgewählt wurde.

```js
let selection;

document.onselectionchange = () => {
  console.log("Neue Auswahl getroffen");
  selection = document.getSelection();
  console.log(selection.type);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}
