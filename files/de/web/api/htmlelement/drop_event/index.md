---
title: "HTMLElement: drop Ereignis"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das **`drop`** Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ablageziel abgelegt wird. Um sicherzustellen, dass das `drop` Ereignis immer wie erwartet ausgelöst wird, sollten Sie immer einen Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in dem Teil Ihres Codes einfügen, der das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis behandelt.

Dieses Ereignis ist abbrechbar und kann bis zum [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) Objekt hoch blubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("drop", (event) => {});

ondrop = (event) => {};
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und loszulassen.

Wir verwenden hier drei Ereignis-Handler:

- im `dragstart` Ereignis-Handler erhalten wir eine Referenz auf das Element, das der Benutzer gezogen hat
- im `dragover` Ereignis-Handler für den Ziel-Container rufen wir `event.preventDefault()` auf, wodurch es in der Lage ist, `drop` Ereignisse zu empfangen.
- im `drop` Ereignis-Handler für die Ablagezone behandeln wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Ablagezone.

Für ein vollständigeres Beispiel für Drag and Drop siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event) Ereignis.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="droptarget"></div>
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

const target = document.getElementById("droptarget");
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
