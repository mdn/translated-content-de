---
title: "DragEvent: dataTransfer-Eigenschaft"
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DragEvent.dataTransfer`**-Eigenschaft enthält die Daten des Ziehvorgangs (als [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt).

## Wert

Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die [Daten des Ziehereignisses](/de/docs/Web/API/DragEvent) enthält.

Die Eigenschaft kann `null` sein, wenn das Ereignis mit dem Konstruktor erstellt wurde. Sie ist niemals `null`, wenn sie vom Browser ausgelöst wird.

## Beispiele

Dieses Beispiel zeigt den Zugriff auf die Drag-and-Drop-Daten innerhalb des [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignishandlers.

```js
function processData(d) {
  // Process the data …
}

dragTarget.addEventListener(
  "dragend",
  (ev) => {
    // Call the drag and drop data processor
    if (ev.dataTransfer !== null) processData(ev.dataTransfer);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
