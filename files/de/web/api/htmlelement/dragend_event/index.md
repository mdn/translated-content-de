---
title: "HTMLElement: dragend-Ereignis"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das `dragend`-Ereignis wird ausgelöst, wenn ein Ziehvorgang endet (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).

Dieses Ereignis kann abgebrochen werden und kann bis zu den Objekten {{domxref("Document")}} und {{domxref("Window")}} hochblasen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("dragend", (event) => {});

ondragend = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Zurücksetzen der Transparenz bei dragend

In diesem Beispiel haben wir ein ziehbares Element in einem Container. Versuchen Sie, das Element zu greifen, zu ziehen und dann loszulassen.

Wir machen das Element halbtransparent, während es gezogen wird, und hören auf das `dragend`-Ereignis, um die Opazität des Elements zurückzusetzen, wenn es freigegeben wird.

Für ein vollständiges Beispiel für Drag and Drop siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event) Ereignis.

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
  /* Verhindern Sie, dass der Benutzer Text im Beispiel auswählt */
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

- Andere Drag-and-Drop-Ereignisse:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}
