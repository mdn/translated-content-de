---
title: "DragEvent: dataTransfer-Eigenschaft"
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DragEvent.dataTransfer`** Eigenschaft enthält die Daten der Ziehoperation (als ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt).

## Wert

Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das die [Daten des Zieh-Ereignisses](/de/docs/Web/API/DragEvent) enthält.

Die Eigenschaft kann `null` sein, wenn das Ereignis mithilfe des Konstruktors erstellt wird. Sie ist niemals `null`, wenn sie vom Browser ausgelöst wird.

## Beispiele

Dieses Beispiel veranschaulicht den Zugriff auf die Drag-and-Drop-Daten innerhalb des [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis-Handlers.

```js
function processData(d) {
  // Process the data …
}

dragTarget.addEventListener("dragend", (ev) => {
  // Call the drag and drop data processor
  if (ev.dataTransfer !== null) processData(ev.dataTransfer);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
