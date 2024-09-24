---
title: "HTMLElement: Zieh-Ereignis"
short-title: ziehen
slug: Web/API/HTMLElement/drag_event
l10n:
  sourceCommit: 689be3910aa020e10ca58a81a4c9190a5819f4f2
---

{{APIRef}}

Das `drag`-Ereignis wird alle paar hundert Millisekunden ausgelöst, während ein Element oder eine Textauswahl vom Benutzer gezogen wird.

Dieses Ereignis kann abgebrochen werden und kann bis zu den Objekten {{domxref("Document")}} und {{domxref("Window")}} durchreichen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("drag", (event) => {});

ondrag = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Ziehen-und-Ablegen-Interaktion übertragen werden.

## Beispiele

### Ziehen und Ablegen Beispiel

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">Dieses div ist ziehbar</div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Verhindern, dass der Benutzer im Beispiel Text markiert */
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

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* Ereignisse, die auf dem ziehbaren Ziel ausgelöst werden */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("ziehen");
});

source.addEventListener("dragstart", (event) => {
  // speicher eine Referenz auf das gezogene Element
  dragged = event.target;
  // mache es halb transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // Transparenz zurücksetzen
  event.target.classList.remove("dragging");
});

/* Ereignisse, die auf den Ablegezielen ausgelöst werden */
const target = document.getElementById("droptarget");
target.addEventListener(
  "dragover",
  (event) => {
    // Standardverhalten verhindern, um Ablegen zu ermöglichen
    event.preventDefault();
  },
  false,
);

target.addEventListener("dragenter", (event) => {
  // potentielles Ablegeziel hervorheben, wenn das ziehbare Element es betritt
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // Hintergrund des potentiellen Ablegeziels zurücksetzen, wenn das ziehbare Element es verlässt
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // Standardaktion verhindern (als Link öffnen bei einigen Elementen)
  event.preventDefault();
  // gezogenes Element zum ausgewählten Ablegeziel verschieben
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Drag and drop example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
