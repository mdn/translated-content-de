---
title: "DataTransferItemList: clear() Methode"
short-title: clear()
slug: Web/API/DataTransferItemList/clear
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

Die Methode **`clear()`** der [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) entfernt alle [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekte aus der Liste der Drag-Daten-Elemente, so dass die Liste leer bleibt.

Der Drag-Daten-Speicher, in dem diese Liste aufbewahrt wird, ist nur während der Verarbeitung des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignisses beschreibbar. Während der Verarbeitung des [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisses befindet sich der Drag-Daten-Speicher im Nur-Lese-Modus, und diese Methode tut stillschweigend nichts. Es wird keine Ausnahme ausgelöst.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `clear()` Methode.

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

  // Clear any remaining drag data
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
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
