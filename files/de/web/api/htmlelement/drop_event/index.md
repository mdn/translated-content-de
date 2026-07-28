---
title: "HTMLElement: drop-Event"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML Drag and Drop API")}}

Das **`drop`**-Event wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziel fallen gelassen wird. Um sicherzustellen, dass das `drop`-Event immer wie erwartet ausgelöst wird, sollten Sie immer einen Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in den Teil Ihres Codes einfügen, der das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Event behandelt.

Dieses Event kann abgebrochen werden und kann bis zu den [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekten hochblubbern.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("drop", (event) => { })

ondrop = (event) => { }
```

## Event-Typ

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und loszulassen.

Wir verwenden hier drei Event-Handler:

- Im `dragstart`-Event-Handler erhalten wir eine Referenz auf das Element, das der Benutzer gezogen hat.
- Im `dragover`-Event-Handler für den Zielcontainer rufen wir `event.preventDefault()` auf, was es ermöglicht, `drop`-Events zu empfangen.
- Im `drop`-Event-Handler für die Drop-Zone behandeln wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Drop-Zone.

Für ein vollständigeres Beispiel von Drag and Drop sehen Sie sich die Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Event an.

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

- Andere Drag-and-Drop-Events:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
