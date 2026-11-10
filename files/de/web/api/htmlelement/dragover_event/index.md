---
title: "HTMLElement: dragover-Ereignis"
short-title: dragover
slug: Web/API/HTMLElement/dragover_event
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragover`-Ereignis wird wiederholt ausgelöst, wenn ein Element oder eine Textauswahl über ein mögliches Ablageziel gezogen wird.

Wie häufig das Ereignis ausgelöst wird, hängt vom Browser, vom Betriebssystem und von der Bewegung des Zeigers ab. Das `dragover`-Ereignis kann auch dann weiter ausgelöst werden, wenn der Zeiger stillsteht, und häufiger auftreten, wenn er sich bewegt. Verlassen Sie sich nicht auf ein festes Intervall und erwarten Sie nicht für jede Zeigerbewegung ein Ereignis. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model) geht von einer Häufigkeit von ungefähr alle 350 ms (±200 ms) aus. In der Praxis verwenden Browser native Aktualisierungen beim Ziehen und plattformspezifische Timer, um diese Ereignisse auszulösen. Dieses Intervall beschreibt daher nicht das Verhalten aller Browser.

Dieses Ereignis kann abgebrochen werden und bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) weitergegeben werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dragover", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ondragover = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Ein einfaches Drag-and-Drop-Beispiel

In diesem Beispiel befindet sich ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und dort loszulassen.

Hier verwenden wir drei Event-Handler:

- Im Event-Handler für `dragstart` erhalten wir eine Referenz auf das Element, das der Benutzer gezogen hat.
- Im Event-Handler für `dragover` des Zielcontainers rufen wir `event.preventDefault()` auf. Dadurch kann der Container `drop`-Ereignisse empfangen.
- Im Event-Handler für `drop` der Ablagezone verschieben wir das ziehbare Element aus dem ursprünglichen Container in die Ablagezone.

Ein vollständiges Drag-and-Drop-Beispiel finden Sie auf der Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

{{EmbedLiveSample('a_minimal_drag-and-drop_example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Drag-and-Drop-Ereignisse:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
