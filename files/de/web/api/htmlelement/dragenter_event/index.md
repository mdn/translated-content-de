---
title: "HTMLElement: dragenter-Ereignis"
short-title: dragenter
slug: Web/API/HTMLElement/dragenter_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML Drag and Drop API")}}

Das `dragenter`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine gezogene Textauswahl in ein gültiges Ablageziel eintritt. Das Zielobjekt ist die _unmittelbare Benutzerauswahl_ (das Element, das der Benutzer direkt als Ablageziel angibt) oder das {{HTMLElement("body")}}-Element.

Dieses Ereignis kann abgebrochen werden und sich bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) ausbreiten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dragenter", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondragenter = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Beispiele

### Ablagezonen bei dragenter gestalten

In diesem Beispiel befindet sich ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und dort loszulassen.

Wir reagieren auf das `dragenter`-Ereignis, um dem anderen Container einen violetten Hintergrund zu geben, solange sich das ziehbare Element darüber befindet. So wird signalisiert, dass das Element auf dem Container abgelegt werden könnte.

In diesem unvollständigen Beispiel ist das Ablegen jedoch nicht implementiert. Ein vollständiges Drag-and-Drop-Beispiel finden Sie auf der Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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

{{EmbedLiveSample('Styling drop zones on dragenter')}}

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
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
