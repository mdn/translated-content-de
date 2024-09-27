---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItemList`**-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten, die Elemente repräsentieren, die gezogen werden. Während eines _Drag-Vorgangs_ hat jedes [`DragEvent`](/de/docs/Web/API/DragEvent) eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, und diese Eigenschaft ist eine `DataTransferItemList`.

Die einzelnen Elemente können mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]` zugegriffen werden.

`DataTransferItemList` wurde in erster Linie für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entwickelt und wird weiterhin im HTML-Bereich für Drag-and-Drop spezifiziert. Es wird jedoch auch von anderen APIs verwendet, wie z.B. [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Die Dokumentation von `DataTransferItemList` wird hauptsächlich ihre Verwendung in Drag-and-Drop-Vorgängen besprechen, und Sie sollten die Dokumentation der anderen APIs konsultieren, um die Verwendung von `DataTransferItemList` in diesen Kontexten zu verstehen.

Diese Schnittstelle hat keinen Konstruktor.

## Instanz-Eigenschaften

- [`DataTransferItemList.length`](/de/docs/Web/API/DataTransferItemList/length) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Anzahl der Drag-Elemente in der Liste ist.

## Instanz-Methoden

- [`DataTransferItemList.add()`](/de/docs/Web/API/DataTransferItemList/add)
  - : Fügt ein Element (entweder ein [`File`](/de/docs/Web/API/File)-Objekt oder einen String) zur Drag-Elementliste hinzu und gibt ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt für das neue Element zurück.
- [`DataTransferItemList.remove()`](/de/docs/Web/API/DataTransferItemList/remove)
  - : Entfernt das Drag-Element an der angegebenen Position aus der Liste.
- [`DataTransferItemList.clear()`](/de/docs/Web/API/DataTransferItemList/clear)
  - : Entfernt alle Drag-Elemente aus der Liste.

## Beispiel

Dieses Beispiel zeigt, wie man Drag and Drop benutzt.

### JavaScript

```js
function dragstartHandler(ev) {
  console.log("dragStart");

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");

  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
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

### Ergebnis

{{EmbedLiveSample('Example', '35%', '250px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
