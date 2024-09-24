---
title: "HTMLElement: drop-Ereignis"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das **`drop`**-Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziehziel abgelegt wird. Um sicherzustellen, dass das `drop`-Ereignis immer wie erwartet ausgelöst wird, sollten Sie immer einen Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in dem Teil Ihres Codes einfügen, der das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis behandelt.

Dieses Ereignis kann abgebrochen werden und kann bis zum {{domxref("Document")}} und {{domxref("Window")}}-Objekten hochblubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("drop", (event) => {});

ondrop = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Ein minimales Drag-and-Drop-Beispiel

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, über den anderen Container zu ziehen und loszulassen.

Wir verwenden hier drei Ereignishandler:

- Im `dragstart`-Ereignishandler erhalten wir eine Referenz zu dem Element, das der Benutzer gezogen hat
- Im `dragover`-Ereignishandler für den Zielcontainer rufen wir `event.preventDefault()` auf, was es ermöglicht, `drop`-Ereignisse zu empfangen.
- Im `drop`-Ereignishandler für die Ablagezone behandeln wir das Verschieben des ziehbaren Elements vom ursprünglichen Container zur Ablagezone.

Für ein vollständigeres Beispiel von Drag and Drop sehen Sie sich die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis an.

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
  /* Verhindern Sie, dass der Benutzer im Beispiel Text auswählt */
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

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as a link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
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

- Andere Drag and Drop-Ereignisse:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
