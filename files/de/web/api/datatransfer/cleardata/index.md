---
title: "DataTransfer: clearData() Methode"
short-title: clearData()
slug: Web/API/DataTransfer/clearData
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.clearData()`** Methode entfernt die [Drag-Daten](/de/docs/Web/API/DataTransfer) einer Ziehoperation für den angegebenen Typ. Wenn für den angegebenen Typ keine Daten existieren, unternimmt diese Methode nichts.

Wird diese Methode ohne Argumente oder mit einem leeren Zeichenfolgenformat aufgerufen, werden die Daten aller Typen entfernt.

Diese Methode entfernt _nicht_ die Dateien aus der Ziehoperation, sodass es möglich ist, dass weiterhin ein Eintrag mit dem Typ `"Files"` in der [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Liste des Objekts vorhanden ist, wenn Dateien im Ziehen enthalten sind.

> [!NOTE]
> Diese Methode kann nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis verwendet werden,
> da dies der einzige Zeitpunkt ist, zu dem der Daten-Store der Ziehoperation beschreibbar ist.

## Syntax

```js-nolint
clearData()
clearData(format)
```

### Parameter

- `format` {{optional_inline}}
  - : Ein string, der den zu entfernenden Datentyp angibt. Wenn
    dieser Parameter eine leere Zeichenfolge ist oder nicht bereitgestellt wird, werden die Daten aller Typen entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objektmethoden
[`getData()`](/de/docs/Web/API/DataTransfer/getData),
[`setData()`](/de/docs/Web/API/DataTransfer/setData) und
`clearData()`.

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

- [Ziehen und Ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehen-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
