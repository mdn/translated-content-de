---
title: "DataTransferItemList: add()-Methode"
short-title: add()
slug: Web/API/DataTransferItemList/add
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItemList.add()`**-Methode erstellt ein neues
{{domxref("DataTransferItem")}} mit den angegebenen Daten und fügt es zur Drag-Datenliste hinzu. Das Element kann eine {{domxref("File")}} oder eine Zeichenkette eines bestimmten Typs sein. Wenn das Element erfolgreich zur Liste hinzugefügt wurde, wird das neu erstellte
{{domxref("DataTransferItem")}}-Objekt zurückgegeben.

## Syntax

```js-nolint
add(data, type)
add(file)
```

### Parameter

- `data`
  - : Eine Zeichenkette, die die Daten des Drag-Elements darstellt.
- `type`
  - : Eine Zeichenkette mit dem Typ des Drag-Elements. Einige Beispieltypen sind
    `text/html` und `text/plain`.
- `file`
  - : Ein {{domxref("File")}}-Objekt. Ein Typ muss in diesem Fall nicht angegeben werden.

### Rückgabewert

Ein {{domxref("DataTransferItem")}}, das die angegebenen Daten enthält. Wenn das Drag-Element nicht erstellt werden konnte (zum Beispiel, wenn das zugehörige {{domxref("DataTransfer")}}-Objekt keinen Datenspeicher hat), wird `null` zurückgegeben.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Zeichenketten-Parameter `data` angegeben wurde und die Liste bereits ein
    Element enthält, dessen {{domxref("DataTransferItem.kind","kind")}} `"Plain Unicode string"` ist und dessen Typ dem angegebenen Typ-Parameter entspricht.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `add()`-Methode.

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstart_handler(event);"
    ondragend="dragend_handler(event);"
    draggable="true">
    Wählen Sie dieses Element aus, ziehen Sie es in die Ablagezone und lassen Sie die Auswahl los, um das Element zu verschieben.
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  Ablagezone
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
  const data = event.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (let i = 0; i < data.length; i++) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      data[i].getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      data[i].getAsString((s) => {
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
