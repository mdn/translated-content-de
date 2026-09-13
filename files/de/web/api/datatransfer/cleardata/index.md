---
title: "DataTransfer: clearData()-Methode"
short-title: clearData()
slug: Web/API/DataTransfer/clearData
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`clearData()`**-Methode des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces entfernt die [Drag-Daten](/de/docs/Web/API/DataTransfer) des Ziehvorgangs für den angegebenen Typ. Wenn Daten für den angegebenen Typ nicht existieren, unternimmt diese Methode nichts.

Wenn diese Methode ohne Argumente aufgerufen wird oder das Format ein leerer String ist, werden die Daten aller Typen entfernt.

Diese Methode entfernt _nicht_ Dateien vom Ziehvorgang. Daher kann es sein, dass immer noch ein Eintrag mit dem Typ `"Files"` in der Liste der [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) des Objekts vorhanden ist, wenn Dateien in das Ziehen inkludiert sind.

Während eines Ziehvorgangs kann diese Methode nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis verwendet werden, da dies der einzige Zeitpunkt ist, an dem der Datenspeicher des Ziehvorgangs schreibbar ist. Ein Aufruf in einem anderen Drag-Ereignis bewirkt nichts. Siehe [Ändern des Datenspeichers für Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) für Details.

## Syntax

```js-nolint
clearData()
clearData(format)
```

### Parameter

- `format` {{optional_inline}}
  - : Ein String, der den Typ der zu entfernenden Daten spezifiziert. Wenn
    dieser Parameter ein leerer String ist oder nicht angegeben wird, werden die Daten aller Typen entfernt.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekts
[`getData()`](/de/docs/Web/API/DataTransfer/getData),
[`setData()`](/de/docs/Web/API/DataTransfer/setData) und
`clearData()`-Methoden.

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  Select this element, drag it to the Drop Zone and then release the selection
  to move the element.
</span>
<span class="tweaked" id="target">Drop Zone</span>
<div>Status: <span id="status">Drag to start</span></div>
<div>Data is: <span id="data">uninitialized</span></div>
```

### CSS

```css
span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
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
// Select HTML elements
const draggable = document.getElementById("source");
const droppable = document.getElementById("target");
const status = document.getElementById("status");
const data = document.getElementById("data");
let dropped = false;

// Register event handlers
draggable.addEventListener("dragstart", dragStartHandler);
draggable.addEventListener("dragend", dragEndHandler);
droppable.addEventListener("dragover", dragOverHandler);
droppable.addEventListener("dragleave", dragLeaveHandler);
droppable.addEventListener("drop", dropHandler);

function dragStartHandler(event) {
  status.textContent = "Drag in process";

  // Change target element's border to signify drag has started
  event.currentTarget.style.border = "1px dashed blue";

  // Start by clearing existing clipboards; this will affect all types since we
  // don't give a specific type.

  event.dataTransfer.clearData();

  // Set the drag's format and data (use event target's id for data)
  event.dataTransfer.setData("text/plain", event.target.id);

  data.textContent = event.dataTransfer.getData("text/plain");
}

function dragEndHandler(event) {
  if (!dropped) {
    status.textContent = "Drag canceled";
  }

  data.textContent = event.dataTransfer.getData("text/plain") || "empty";

  // Change border to signify drag is no longer in process
  event.currentTarget.style.border = "1px solid black";

  if (dropped) {
    // Remove all event listeners
    draggable.removeEventListener("dragstart", dragStartHandler);
    draggable.removeEventListener("dragend", dragEndHandler);
    droppable.removeEventListener("dragover", dragOverHandler);
    droppable.removeEventListener("dragleave", dragLeaveHandler);
    droppable.removeEventListener("drop", dropHandler);
  }
}

function dragOverHandler(event) {
  status.textContent = "Drop available";

  event.preventDefault();
}

function dragLeaveHandler(event) {
  status.textContent = "Drag in process (drop was available)";

  event.preventDefault();
}

function dropHandler(event) {
  dropped = true;

  status.textContent = "Drop done";

  event.preventDefault();

  // Get data linked to event format « text »
  const _data = event.dataTransfer.getData("text/plain");
  const element = document.getElementById(_data);

  // Append drag source element to event's target element
  event.target.appendChild(element);

  // Change CSS styles and displayed text
  element.style.cssText = "border: 1px solid black;display: block; color: red";
  element.textContent = "I'm in the Drop Zone!";
}
```

{{EmbedLiveSample('Examples', 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Datenspeicher für Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
