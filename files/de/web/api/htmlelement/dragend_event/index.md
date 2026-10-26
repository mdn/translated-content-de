---
title: "HTMLElement: dragend-Ereignis"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragend`-Ereignis wird ausgelöst, wenn ein Ziehvorgang endet (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).

Dieses Ereignis kann abgebrochen werden und zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dragend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ondragend = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Deckkraft nach dragend zurücksetzen

In diesem Beispiel befindet sich ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es zu ziehen und dann loszulassen.

Während das Element gezogen wird, machen wir es halbtransparent. Wir lauschen auf das `dragend`-Ereignis, um die Deckkraft des Elements zurückzusetzen, sobald es losgelassen wird.

Ein vollständiges Drag-and-Drop-Beispiel finden Sie auf der Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone"></div>
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});
```

#### Ergebnis

{{EmbedLiveSample('Resetting opacity on drag end')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Drag-and-Drop-Ereignisse:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
