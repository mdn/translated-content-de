---
title: "HTMLElement: dragover-Ereignis"
short-title: dragover
slug: Web/API/HTMLElement/dragover_event
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragover`-Ereignis wird wiederholt ausgelöst, wenn ein Element oder eine Textauswahl über ein potenzielles Ziehziel gezogen wird.

Die Auslösefrequenz hängt vom Browser, Betriebssystem und der Zeigerbewegung ab. Das `dragover`-Ereignis kann weiterhin ausgelöst werden, während der Zeiger stationär ist, und kann häufiger ausgelöst werden, während er sich bewegt. Verlassen Sie sich nicht auf ein festes Intervall oder erwarten Sie ein Ereignis für jede Zeigerbewegung. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model) verwendet eine Auslösefrequenz von ungefähr 350 ms (±200 ms). In der Praxis verwenden Browser native Drag-Updates und plattformspezifische Timer, um diese Ereignisse zu verteilen, sodass dieses Intervall nicht das gesamte Browserverhalten beschreibt.

Dieses Ereignis kann abgebrochen werden und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dragover", (event) => { })

ondragover = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, über den anderen Container zu ziehen und es loszulassen.

Wir verwenden hier drei Ereignishandler:

- im `dragstart`-Ereignishandler erhalten wir eine Referenz auf das Element, das der Benutzer gezogen hat
- im `dragover`-Ereignishandler für den Zielcontainer rufen wir `event.preventDefault()` auf, was es ermöglicht, `drop`-Ereignisse zu empfangen.
- im `drop`-Ereignishandler für die Zielzone behandeln wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Zielzone.

Für ein vollständiges Beispiel von Drag and Drop, siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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
  // prevent default action (open as link for some elements)
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
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
