---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItemList`**-Objekt ist eine Liste von {{domxref("DataTransferItem")}}-Objekten, die Elemente repräsentieren, die gezogen werden. Während eines _Zieh- und Ablege-Vorgangs_ hat jedes {{domxref("DragEvent")}} eine {{domxref("DragEvent.dataTransfer","dataTransfer")}}-Eigenschaft, und diese Eigenschaft ist eine `DataTransferItemList`.

Die einzelnen Elemente können mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]` zugegriffen werden.

`DataTransferItemList` wurde ursprünglich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entworfen und wird immer noch im HTML-Zieh-und-Ablege-Abschnitt spezifiziert. Es wird jedoch inzwischen auch von anderen APIs wie {{domxref("ClipboardEvent.clipboardData")}} und {{domxref("InputEvent.dataTransfer")}} verwendet. Die Dokumentation von `DataTransferItemList` behandelt hauptsächlich die Verwendung bei Drag-and-Drop-Operationen. Für die Verwendung von `DataTransferItemList` in anderen Kontexten sollten Sie die Dokumentation der jeweiligen APIs konsultieren.

Diese Schnittstelle hat keinen Konstruktor.

## Instanzeigenschaften

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Anzahl der Zieh-Elemente in der Liste darstellt.

## Instanzmethoden

- {{domxref("DataTransferItemList.add()")}}
  - : Fügt ein Element (entweder ein {{domxref("File")}}-Objekt oder einen String) zur Ziehelementliste hinzu und gibt ein {{domxref("DataTransferItem")}}-Objekt für das neue Element zurück.
- {{domxref("DataTransferItemList.remove()")}}
  - : Entfernt das Zieh-Element aus der Liste am angegebenen Index.
- {{domxref("DataTransferItemList.clear()")}}
  - : Entfernt alle Zieh-Elemente aus der Liste.

## Beispiel

Dieses Beispiel zeigt, wie man Drag and Drop verwendet.

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
