---
title: "HTMLElement: dragenter-Ereignis"
short-title: dragenter
slug: Web/API/HTMLElement/dragenter_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `dragenter`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl in ein gültiges Ziehziel gelangt. Das Zielobjekt ist die _unmittelbare Benutzerauswahl_ (das von der Benutzerin oder dem Benutzer direkt als Ziehziel angezeigte Element) oder das {{HTMLElement("body")}}-Element.

Dieses Ereignis kann abgebrochen werden und kann zum [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window)-Objekt hochblasen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("dragenter", (event) => { })

ondragenter = (event) => { }
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Styling von Ziehzonen bei dragenter

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und es loszulassen.

Wir lauschen auf das `dragenter`-Ereignis, um dem anderen Container einen violetten Hintergrund zu geben, während sich das ziehbare Element über ihm befindet, um zu signalisieren, dass das ziehbare Element in den Container abgelegt werden könnte.

In diesem Teilausschnitt haben wir jedoch das Ablegen nicht implementiert: Für ein vollständiges Beispiel zu Drag and Drop sehen Sie sich die Seite zum [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis an.

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

- Andere Drag-and-Drop-Ereignisse:

  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
