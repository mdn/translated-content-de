---
title: "DataTransferItemList: clear()-Methode"
short-title: clear()
slug: Web/API/DataTransferItemList/clear
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die Methode **`clear()`** der {{domxref("DataTransferItemList")}} entfernt alle {{domxref("DataTransferItem")}} Objekte aus der Liste der Drag-Daten-Elemente und hinterlässt eine leere Liste.

Das Drag-Daten-Depot, in dem diese Liste gespeichert wird, ist nur während der Behandlung des {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignisses beschreibbar. Während der Behandlung des {{domxref("HTMLElement/drop_event", "drop")}}-Ereignisses befindet sich das Drag-Daten-Depot im Nur-Lesen-Modus, und diese Methode tut stillschweigend nichts. Es wird keine Ausnahme ausgelöst.

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
    Wählen Sie dieses Element aus, ziehen Sie es zur Ablagezone und lassen Sie dann die Auswahl los, um das Element zu bewegen.
  </p>
</div>
<div
  id="target"
  ondrop="dropHandler(event);"
  ondragover="dragoverHandler(event);">
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
