---
title: "HTMLElement: drop-Ereignis"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML Drag and Drop API")}}

Das **`drop`**-Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ablageziel abgelegt wird. Damit das `drop`-Ereignis zuverlässig ausgelöst wird, sollten Sie im Code, der das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis verarbeitet, immer [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen.

Dieses Ereignis kann abgebrochen werden und zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("drop", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondrop = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Ein einfaches Drag-and-Drop-Beispiel

In diesem Beispiel befindet sich ein ziehbares Element in einem Container. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und dort loszulassen.

Hier verwenden wir drei Event-Handler:

- Im `dragstart`-Event-Handler erhalten wir eine Referenz auf das Element, das der Benutzer gezogen hat.
- Im `dragover`-Event-Handler des Zielcontainers rufen wir `event.preventDefault()` auf. Dadurch kann der Container `drop`-Ereignisse empfangen.
- Im `drop`-Event-Handler der Ablagezone verschieben wir das ziehbare Element vom ursprünglichen Container in die Ablagezone.

Ein ausführlicheres Drag-and-Drop-Beispiel finden Sie auf der Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

- Weitere Drag-and-Drop-Ereignisse:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
