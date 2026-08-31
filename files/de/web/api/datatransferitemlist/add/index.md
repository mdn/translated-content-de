---
title: "DataTransferItemList: add() Methode"
short-title: add()
slug: Web/API/DataTransferItemList/add
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`add()`** Methode der [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Schnittstelle erstellt ein neues [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) mit den angegebenen Daten und fügt es der Drag-Datenliste hinzu. Das Element kann eine [`File`](/de/docs/Web/API/File) oder eine Zeichenkette eines bestimmten Typs sein. Wenn das Element erfolgreich zur Liste hinzugefügt wird, wird das neu erstellte [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt zurückgegeben.

Während eines Drag-Vorgangs kann diese Methode nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis verwendet werden, da dies der einzige Zeitpunkt ist, an dem der Datenspeicher des Drag-Vorgangs beschreibbar ist. Ein Aufruf dieser Methode von einem anderen Drag-Ereignis aus gibt `null` zurück, ohne ein Element hinzuzufügen. Weitere Details finden Sie unter [Modifying the drag data store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store).

## Syntax

```js-nolint
add(data, type)
add(file)
```

### Parameter

- `data`
  - : Ein String, der die Daten des Drag-Elements darstellt.
- `type`
  - : Ein String des Drag-Elementtyps. Einige Beispielt-Typen sind `text/html` und `text/plain`.
- `file`
  - : Ein [`File`](/de/docs/Web/API/File) Objekt. In diesem Fall muss kein Typ angegeben werden.

### Rückgabewert

Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem), das die angegebenen Daten enthält. Wenn das Drag-Element nicht erstellt werden konnte (zum Beispiel, wenn das zugehörige [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt keinen Datenspeicher hat), wird `null` zurückgegeben.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der String `data` Parameter angegeben wurde und die Liste bereits ein Element enthält, dessen [`kind`](/de/docs/Web/API/DataTransferItem/kind) `"Plain Unicode string"` ist und dessen Typ dem angegebenen Typ-Parameter entspricht.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `add()` Methode.

### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
```

### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}
#source {
  color: blue;
  border: 1px solid black;
}
#target {
  border: 1px solid black;
}
```

### JavaScript

```js
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
});

source.addEventListener("dragend", (ev) => {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Loop through the dropped items and log their data
  for (const item of event.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
});

target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
});
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
