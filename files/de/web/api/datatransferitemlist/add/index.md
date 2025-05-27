---
title: "DataTransferItemList: add() Methode"
short-title: add()
slug: Web/API/DataTransferItemList/add
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItemList.add()`** Methode erstellt ein neues [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) mit den angegebenen Daten und fügt es der Drag-Datenliste hinzu. Das Element kann eine [`File`](/de/docs/Web/API/File) oder eine Zeichenkette eines bestimmten Typs sein. Wenn das Element erfolgreich zur Liste hinzugefügt wird, wird das neu erstellte [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt zurückgegeben.

## Syntax

```js-nolint
add(data, type)
add(file)
```

### Parameter

- `data`
  - : Ein String, der die Daten des Ziehelements darstellt.
- `type`
  - : Ein String des Typs des Ziehelements. Einige Beispieltypen sind `text/html` und `text/plain`.
- `file`
  - : Ein [`File`](/de/docs/Web/API/File) Objekt. In diesem Fall muss kein Typ angegeben werden.

### Rückgabewert

Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem), das die angegebenen Daten enthält. Wenn das Ziehelement nicht erstellt werden konnte (zum Beispiel, wenn das zugehörige [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt keinen Datenspeicher hat), wird `null` zurückgegeben.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `data` String-Parameter bereitgestellt wurde und die Liste bereits ein Element enthält, dessen [`kind`](/de/docs/Web/API/DataTransferItem/kind) `"Plain Unicode string"` ist und dessen Typ dem angegebenen Typ-Parameter entspricht.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `add()` Methode.

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstart_handler(event);"
    ondragend="dragend_handler(event);"
    draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  Drop Zone
</div>
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
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function drop_handler(ev) {
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
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function dragend_handler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 300)}}

{{LiveSampleLink('Examples', 'Result link')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
