---
title: "DataTransferItemList: clear()-Methode"
short-title: clear()
slug: Web/API/DataTransferItemList/clear
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die Methode **`clear()`** der [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) entfernt alle [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte aus der Liste der Drag-Datenobjekte, sodass die Liste leer bleibt.

Der Drag-Datenspeicher, in dem diese Liste geführt wird, ist nur während der Verarbeitung des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses schreibbar. Während der Verarbeitung von [`drop`](/de/docs/Web/API/HTMLElement/drop_event) befindet sich der Drag-Datenspeicher im Nur-Lese-Modus, und diese Methode tut stillschweigend nichts. Es wird keine Ausnahme ausgelöst.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `clear()`-Methode.

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstartHandler(event);"
    ondragend="dragendHandler(event);"
    draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="dropHandler(event);"
  ondragover="dragoverHandler(event);">
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
function dragstartHandler(ev) {
  console.log("dragStart");

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
}

function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();

  // Loop through the dropped items and log their data
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragoverHandler(ev) {
  console.log("dragOver");
  ev.preventDefault();

  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;

  // Clear any remaining drag data
  dataList.clear();
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
