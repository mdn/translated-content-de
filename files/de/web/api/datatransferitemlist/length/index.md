---
title: "DataTransferItemList: length-Eigenschaft"
short-title: length
slug: Web/API/DataTransferItemList/length
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`length`**-Eigenschaft der [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstelle gibt die Anzahl der Elemente in der aktuellen Ziehelementliste zurück.

Während eines Ziehvorgangs kann diese Eigenschaft in jedem Ziehereignishandler gelesen werden, sogar wenn der Ziehdaten-Store im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) ist. Die Anzahl der Elemente bleibt zugänglich, jedoch können deren Daten nur in den Handlers für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse gelesen werden. Siehe [Lesen des Ziehdaten-Stores](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

## Wert

Die Anzahl der Ziehdaten-Elemente in der Liste oder 0, wenn die Liste leer oder deaktiviert ist. Die Liste der Ziehelemente wird als deaktiviert betrachtet, wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt der Elementliste nicht mit einem Ziehdaten-Store assoziiert ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `length`-Eigenschaft.

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
  const data = ev.dataTransfer.items;
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
});

target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
});
```

### Ergebnis

{{EmbedLiveSample('Examples', 100, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
