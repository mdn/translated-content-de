---
title: "DataTransfer: clearData() Methode"
short-title: clearData()
slug: Web/API/DataTransfer/clearData
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.clearData()`** Methode entfernt die [Drag-Daten](/de/docs/Web/API/DataTransfer) des gegebenen Typs aus dem Drag-Vorgang. Wenn keine Daten für den gegebenen Typ existieren, tut diese Methode nichts.

Wenn diese Methode ohne Argumente oder mit einem leeren String als Format aufgerufen wird, werden die Daten aller Typen entfernt.

Diese Methode entfernt _nicht_ die Dateien aus dem Drag-Vorgang, daher kann es sein, dass weiterhin ein Eintrag mit dem Typ `"Files"` in der [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Liste des Objekts verbleibt, wenn Dateien in den Drag-Vorgang eingeschlossen sind.

> [!NOTE]
> Diese Methode kann nur im Handler des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignisses verwendet werden, da dies der einzige Zeitpunkt ist, zu dem der Datenspeicher des Drag-Vorgangs beschreibbar ist.

## Syntax

```js-nolint
clearData()
clearData(format)
```

### Parameter

- `format` {{optional_inline}}
  - : Ein String, der den Typ der zu entfernenden Daten angibt. Wenn dieser Parameter ein leerer String ist oder nicht angegeben wird, werden die Daten für alle Typen entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der Methoden [`getData()`](/de/docs/Web/API/DataTransfer/getData),
[`setData()`](/de/docs/Web/API/DataTransfer/setData) und
`clearData()` des [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekts.

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
window.addEventListener("DOMContentLoaded", () => {
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
    element.style.cssText =
      "border: 1px solid black;display: block; color: red";
    element.textContent = "I'm in the Drop Zone!";
  }
});
```

{{EmbedLiveSample('Examples', 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
