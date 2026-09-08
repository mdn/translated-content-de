---
title: "DataTransferItemList: length-Eigenschaft"
short-title: length
slug: Web/API/DataTransferItemList/length
l10n:
  sourceCommit: 2a4ce8db664c71d41fa179be43f3336ad384ab65
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte Eigenschaft **`length`** des Interfaces [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) gibt die Anzahl der Elemente zurück, die sich derzeit in der Drag-Elementliste befinden.

Während eines Drag-Vorgangs kann diese Eigenschaft in jedem Drag-Event-Handler gelesen werden, selbst wenn sich der Drag-Datenspeicher im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) befindet. Die Anzahl der Elemente bleibt zugänglich, ihre Daten können jedoch nur in den Handlern für die Events [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) gelesen werden. Details finden Sie unter [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Wert

Die Anzahl der Drag-Datenelemente in der Liste oder 0, wenn die Liste leer oder deaktiviert ist. Die Drag-Elementliste gilt als deaktiviert, wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt der Elementliste keinem Drag-Datenspeicher zugeordnet ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Eigenschaft `length`.

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
    if (data[i].kind === "string" && data[i].type === "text/plain") {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type === "text/html") {
      // Drag data item is HTML
      data[i].getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (data[i].kind === "string" && data[i].type === "text/uri-list") {
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
