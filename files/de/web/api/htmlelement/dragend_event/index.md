---
title: "HTMLElement: dragend Event"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das `dragend`-Ereignis wird ausgelöst, wenn eine Ziehoperation endet (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).

Dieses Ereignis ist abbrechbar und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) hochbubbeln.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("dragend", (event) => { })

ondragend = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Opazität bei dragend zurücksetzen

In diesem Beispiel haben wir ein Ziehelement innerhalb eines Containers. Versuchen Sie, das Element zu greifen, zu ziehen und loszulassen.

Wir machen das Element halbtransparent, während es gezogen wird, und lauschen dem `dragend`-Ereignis, um die Opazität des Elements zurückzusetzen, wenn es losgelassen wird.

Für ein vollständiges Beispiel von Drag and Drop, sehen Sie sich die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis an.

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
