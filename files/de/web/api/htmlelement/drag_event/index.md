---
title: "HTMLElement: drag-Ereignis"
short-title: drag
slug: Web/API/HTMLElement/drag_event
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{APIRef("HTML Drag and Drop API")}}

Das `drag`-Ereignis wird wiederholt ausgelöst, wenn ein Element oder eine Textauswahl vom Benutzer gezogen wird. Die Häufigkeit des Auslösens hängt vom Browser, Betriebssystem und der Bewegung des Zeigers ab; verlassen Sie sich nicht auf ein festes Intervall.

Die Häufigkeit des Auslösens hängt vom Browser, Betriebssystem und der Zeigerbewegung ab. Das `drag`-Ereignis kann weiterhin ausgelöst werden, während der Zeiger stationär ist, und kann häufiger ausgelöst werden, während er sich bewegt. Verlassen Sie sich nicht auf ein festes Intervall oder erwarten Sie ein Ereignis bei jeder Zeigerbewegung. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model) verwendet eine Auslösefrequenz von etwa 350 ms (±200 ms). In der Praxis verwenden Browser native Drag-Updates und plattformspezifische Timer, um diese Ereignisse zu versenden, sodass dieses Intervall nicht alle Browserverhalten beschreibt.

Dieses Ereignis kann abgebrochen werden und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) hinaufblubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("drag", (event) => { })

ondrag = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Beispiel für Drag and Drop

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
