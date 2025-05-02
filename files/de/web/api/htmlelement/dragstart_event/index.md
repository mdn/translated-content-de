---
title: "HTMLElement: dragstart-Ereignis"
short-title: dragstart
slug: Web/API/HTMLElement/dragstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `dragstart`-Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.

Dieses Ereignis ist abbruchfähig und kann zum [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekt hochblubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dragstart", (event) => { })

ondragstart = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Transparenz beim Start des Ziehens festlegen

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, zu ziehen und dann loszulassen.

Wir hören das `dragstart`-Ereignis ab, um das Element während des Ziehens halb transparent zu machen.

Für ein vollständiges Beispiel zum Ziehen und Ablegen siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

{{EmbedLiveSample('Setting opacity on drag start')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Drag-and-Drop-Ereignisse:

  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
