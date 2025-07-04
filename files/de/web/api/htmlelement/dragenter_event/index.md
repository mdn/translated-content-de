---
title: "HTMLElement: dragenter-Event"
short-title: dragenter
slug: Web/API/HTMLElement/dragenter_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das `dragenter`-Event wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Zielgebiet erreicht. Das Zielobjekt ist die _unmittelbare Benutzerselektion_ (das Element, das direkt vom Benutzer als Zielgebiet angegeben wird) oder das {{HTMLElement("body")}}-Element.

Dieses Event kann abgebrochen werden und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) propagieren.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("dragenter", (event) => { })

ondragenter = (event) => { }
```

## Event-Typ

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Event-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Stilgestaltung von Drop-Zonen bei dragenter

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und es wieder loszulassen.

Wir hören auf das `dragenter`-Event, um dem anderen Container einen violetten Hintergrund zu geben, während sich das ziehbare Element darüber befindet, um anzuzeigen, dass das Element auf den Container fallen gelassen werden könnte.

In diesem Teilbeispiel haben wir jedoch das Fallenlassen noch nicht implementiert. Für ein vollständiges Beispiel von Drag and Drop, siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Event.

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

- Weitere Drag-and-Drop-Events:
  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
