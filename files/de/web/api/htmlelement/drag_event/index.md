---
title: "HTMLElement: drag-Ereignis"
short-title: drag
slug: Web/API/HTMLElement/drag_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML Drag and Drop API")}}

Das `drag`-Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl von einer Person gezogen wird. Die Häufigkeit hängt vom Browser, vom Betriebssystem und von der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.

Die Häufigkeit hängt vom Browser, vom Betriebssystem und von der Zeigerbewegung ab. Das `drag`-Ereignis kann weiterhin ausgelöst werden, während der Zeiger stillsteht, und häufiger ausgelöst werden, während er sich bewegt. Verlassen Sie sich nicht auf ein festes Intervall und erwarten Sie nicht für jede Zeigerbewegung ein Ereignis. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model) geht von einer Auslösung ungefähr alle 350 ms (±200 ms) aus. In der Praxis verwenden Browser native Drag-Aktualisierungen und plattformspezifische Timer, um diese Ereignisse auszulösen. Dieses Intervall beschreibt daher nicht das Verhalten aller Browser.

Dieses Ereignis kann abgebrochen werden und bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("drag", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondrag = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Drag-and-Drop-Beispiel

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
  /* Prevent the user selecting text in the example */
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

.dropzone.dragover {
  background-color: purple;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* events fired on the draggable target */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
const target = document.getElementById("drop-target");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Drag and drop example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
