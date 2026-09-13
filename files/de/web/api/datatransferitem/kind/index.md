---
title: "DataTransferItem: Eigenschaft kind"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 2a4ce8db664c71d41fa179be43f3336ad384ab65
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte Eigenschaft **`kind`** des Interfaces [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) gibt die Art – einen String oder eine Datei – des Objekts zurück, das das _Drag-Datenelement_ darstellt.

Während eines Drag-Vorgangs kann diese Eigenschaft in jedem Drag-Event-Handler gelesen werden, selbst wenn sich der Drag-Datenspeicher im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) befindet. Die Art des Elements bleibt zugänglich, aber seine Daten können nur in den Handlern für die Events [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) gelesen werden. Einzelheiten finden Sie unter [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Wert

Ein String, der die Art des Drag-Datenelements darstellt.
Er muss einer der folgenden Werte sein:

- `'file'`
  - : Wenn das Drag-Datenelement eine Datei ist.
- `'string'`
  - : Wenn die Art des Drag-Datenelements ein _einfacher Unicode-String_ ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Eigenschaft `kind`.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type === "text/plain") {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type === "text/html") {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "file" && item.type.startsWith("image/")) {
      // Drag data item is an image file
      const f = item.getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
