---
title: "DataTransfer: items-Eigenschaft"
short-title: items
slug: Web/API/DataTransfer/items
l10n:
  sourceCommit: 075677cf5ec013c67340cd541d16a36c71b56bac
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte `items`-Eigenschaft des {{domxref("DataTransfer")}}-Interfaces ist eine
{{domxref("DataTransferItemList","Liste")}} der {{domxref("DataTransferItem","Datenübertragungsobjekte", "", "nocode")}} in einer Ziehoperation. Die Liste enthält ein Element für jedes Objekt in der Operation, und wenn die Operation keine Elemente umfasste, ist die Liste leer.

## Wert

Ein {{domxref("DataTransferItemList")}}-Objekt, das {{domxref("DataTransferItem")}}
Objekte enthält, die die in einer Ziehoperation gezogenen Elemente repräsentieren, ein Listenelement für jedes gezogene Objekt. Wenn die Ziehoperation keine Daten hatte, ist die Liste leer.

## Beispiele

### Protokollierung gezogener Elemente

Dieses Beispiel verwendet `items`, um Informationen über gezogene Elemente zu protokollieren.

#### HTML

```html
<ul>
  <li id="source1" draggable="true">Ziehen Sie Element 1 auf die Ablagezone</li>
  <li id="source2" draggable="true">Ziehen Sie Element 2 auf die Ablagezone</li>
</ul>
<div id="target">Ablagezone</div>

<button id="reset">Zurücksetzen</button>
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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Zieh-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
