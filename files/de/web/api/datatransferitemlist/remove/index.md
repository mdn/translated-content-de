---
title: "DataTransferItemList: remove()-Methode"
short-title: remove()
slug: Web/API/DataTransferItemList/remove
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItemList.remove()`**-Methode entfernt das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) an dem angegebenen Index aus der Liste. Wenn der Index kleiner als null oder größer als die Länge der Liste minus eins ist, wird die Liste nicht verändert.

## Syntax

```js-nolint
remove(index)
```

### Parameter

- `index`
  - : Die nullbasierte Indexnummer des Elements in der Drag-Datenliste, das entfernt werden soll. Wenn der `index` keinem vorhandenen Element in der Liste entspricht, bleibt die Liste unverändert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Drag-Datenspeicher nicht im Lese-/Schreibmodus ist und daher das Element nicht entfernt werden kann.

## Beispiele

### Ziehen und Ablegen eines Elements

Dieses Beispiel zeigt die Verwendung der `remove()`-Methode.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
```

#### CSS

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

#### JavaScript

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
  for (const item of data) {
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
  // Clear all the files. Iterate in reverse order to safely remove.
  for (let i = dataList.length - 1; i >= 0; i--) {
    if (dataList[i].kind === "file") {
      dataList.remove(i);
    }
  }
  // Clear any remaining drag data
  dataList.clear();
}

const source = document.querySelector("#source");
source.addEventListener("dragstart", dragstart_handler);
source.addEventListener("dragend", dragend_handler);

const target = document.querySelector("#target");
target.addEventListener("drop", drop_handler);
target.addEventListener("dragover", dragover_handler);
```

#### Ergebnis

{{ EmbedLiveSample('Ziehen und Ablegen eines Elements', 100, '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
