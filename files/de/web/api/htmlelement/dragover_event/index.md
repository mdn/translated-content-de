---
title: "HTMLElement: dragover-Ereignis"
short-title: dragover
slug: Web/API/HTMLElement/dragover_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das `dragover`-Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl über ein gültiges Drop-Ziel gezogen wird (alle paar hundert Millisekunden).

Dieses Ereignis kann abgebrochen werden und kann bis zu den {{domxref("Document")}}- und {{domxref("Window")}}-Objekten nach oben propagiert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dragover", (event) => {});

ondragover = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und es loszulassen.

Wir verwenden hier drei Ereignis-Handler:

- Im `dragstart`-Ereignis-Handler erhalten wir eine Referenz zu dem Element, das der Benutzer gezogen hat.
- Im `dragover`-Ereignis-Handler für den Zielcontainer rufen wir `event.preventDefault()` auf, was es ermöglicht, `drop`-Ereignisse zu empfangen.
- Im `drop`-Ereignis-Handler für die Drop-Zone behandeln wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Drop-Zone.

Für ein vollständiges Beispiel für Drag and Drop siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Verhindert, dass der Benutzer Text im Beispiel auswählt */
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
  // Store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // Prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // Prevent default action (open as link for some elements)
  event.preventDefault();
  // Move dragged element to the selected drop target
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

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}
