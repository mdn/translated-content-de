---
title: "DataTransfer: items-Eigenschaft"
short-title: items
slug: Web/API/DataTransfer/items
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`items`** schreibgeschützte Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces ist eine [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten in einem Drag-Vorgang. Die Liste enthält ein Element für jedes Element im Vorgang und ist leer, wenn der Vorgang keine Elemente hatte.

Während eines Drag-Vorgangs kann diese Eigenschaft verwendet werden, um die Elemente aufzulisten und deren Arten und Typen in jedem Drag-Event-Handler zu inspizieren. Die Daten der Elemente können jedoch nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)- und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse gelesen werden, und die Liste kann nur im `dragstart`-Handler modifiziert werden. Siehe [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) und [Modifizieren des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) für Details.

## Wert

Ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte enthält, die die im Drag-Vorgang gezogenen Elemente darstellen, ein Listenelement für jedes gezogene Objekt. Wenn der Drag-Vorgang keine Daten hatte, ist die Liste leer.

## Beispiele

### Protokollierung gezogener Elemente

Dieses Beispiel verwendet `items`, um Informationen über gezogene Elemente zu protokollieren.

#### HTML

```html
<ul>
  <li id="source1" draggable="true">Drag Item 1 to the Drop Zone</li>
  <li id="source2" draggable="true">Drag Item 2 to the Drop Zone</li>
</ul>
<div id="target">Drop Zone</div>

<button id="reset">Reset</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#target {
  border: 1px solid black;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  console.log(`dragstart: target.id = ${ev.target.id}`);
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // Print each item's "kind" and "type"
  if (ev.dataTransfer.items) {
    for (const item of ev.dataTransfer.items) {
      console.log(`kind = ${item.kind}, type = ${item.type}`);
    }
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

const source1 = document.querySelector("#source1");
const source2 = document.querySelector("#source2");
const target = document.querySelector("#target");

source1.addEventListener("dragstart", dragstartHandler);
source2.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

{{EmbedLiveSample("Logging dragged items", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
