---
title: "HTMLElement: drop-Ereignis"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`drop`**-Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziehlobjekt fallen gelassen wird. Um sicherzustellen, dass das `drop`-Ereignis immer wie erwartet ausgelöst wird, sollten Sie immer einen Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in den Teil Ihres Codes einschließen, der das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis verarbeitet.

Dieses Ereignis kann abgebrochen werden und kann bis zum [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekt nach oben blubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("drop", (event) => { })

ondrop = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen Eigenschaften aus der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) zur Verfügung._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und loszulassen.

Wir verwenden hier drei Ereignis-Handler:

- Im `dragstart`-Ereignis-Handler erhalten wir eine Referenz zu dem Element, das der Benutzer gezogen hat.
- Im `dragover`-Ereignis-Handler für den Zielcontainer rufen wir `event.preventDefault()` auf, was es ermöglicht, `drop`-Ereignisse zu empfangen.
- Im `drop`-Ereignis-Handler für die Ablagezone verarbeiten wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Ablagezone.

Für ein vollständigeres Beispiel von Drag-and-Drop siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="drop-target"></div>
```

#### CSS

```css
body {
  /* Prevent the user from selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("drop-target");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as a link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### Ergebnis

{{EmbedLiveSample('A minimal drag and drop example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Drag-and-Drop-Ereignisse:

  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
