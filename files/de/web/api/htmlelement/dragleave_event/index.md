---
title: "HTMLElement: dragleave-Ereignis"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragleave`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine gezogene Textauswahl ein gültiges Ablageziel verlässt.

Dieses Ereignis kann nicht abgebrochen werden und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dragleave", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ondragleave = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Stile der Ablagezone bei dragleave zurücksetzen

In diesem Beispiel befindet sich ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und dort loszulassen.

Solange sich das ziehbare Element über dem anderen Container befindet, geben wir diesem einen violetten Hintergrund. Dadurch wird angezeigt, dass das Element auf dem Container abgelegt werden könnte. Wir reagieren auf das `dragleave`-Ereignis, um den Hintergrund des Containers zurückzusetzen, wenn das ziehbare Element den Container verlässt.

In diesem unvollständigen Beispiel haben wir das Ablegen allerdings nicht implementiert. Ein vollständiges Drag-and-Drop-Beispiel finden Sie auf der Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

- Weitere Drag-and-Drop-Ereignisse:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
