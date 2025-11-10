---
title: "HTMLElement: dragleave-Ereignis"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragleave`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl einen gültigen Zielbereich verlässt.

Dieses Ereignis ist nicht abzubrechen und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) propagiert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("dragleave", (event) => { })

ondragleave = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Zurücksetzen der Stilwahl des Zielbereichs bei dragleave

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, über den anderen Container zu ziehen und es loszulassen.

Wir geben dem anderen Container einen violetten Hintergrund, während sich das ziehbare Element darüber befindet, um anzuzeigen, dass es darauf abgelegt werden könnte. Wir hören auf das `dragleave`-Ereignis, um den Hintergrund des Containers zurückzusetzen, wenn das ziehbare Element aus dem Container gezogen wird.

Allerdings haben wir in diesem unvollständigen Beispiel das Ablegen nicht implementiert: Für ein vollständiges Beispiel von Drag-and-Drop, siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
const target = document.getElementById("drop-target");
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
```

#### Ergebnis

{{EmbedLiveSample('Resetting drop zone styles on dragleave')}}

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
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
