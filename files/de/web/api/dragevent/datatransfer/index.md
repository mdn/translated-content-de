---
title: "DragEvent: dataTransfer-Eigenschaft"
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte Eigenschaft **`DragEvent.dataTransfer`** enthält die Daten der Ziehoperation (als ein {{domxref("DataTransfer")}}-Objekt).

## Wert

Ein {{domxref("DataTransfer")}}-Objekt, das die Daten des {{domxref("DragEvent","Ziehen-Ereignisses", "", 1)}} enthält.

Die Eigenschaft kann `null` sein, wenn das Ereignis mit dem Konstruktor erstellt wird. Sie ist nie `null`, wenn es vom Browser ausgelöst wird.

## Beispiele

Dieses Beispiel zeigt, wie die Zieh-und-Abwurf-Daten innerhalb des {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignishandlers zugegriffen werden.

```js
function processData(d) {
  // Verarbeiten Sie die Daten …
}

dragTarget.addEventListener(
  "dragend",
  (ev) => {
    // Rufen Sie den Zieh-und-Abwurf-Datenprozessor auf
    if (ev.dataTransfer !== null) processData(ev.dataTransfer);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
