---
title: "PointerEvent: getCoalescedEvents()-Methode"
short-title: getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
l10n:
  sourceCommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{APIRef("Pointer Events")}} {{secureContext_header}}

Die **`getCoalescedEvents()`**-Methode der {{domxref("PointerEvent")}}-Schnittstelle gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die in ein einzelnes {{domxref('Element/pointermove_event', 'pointermove')}}- oder {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}-Ereignis koalesziert (zusammengeführt) wurden.
Anstatt eines Stroms von vielen {{domxref('Element/pointermove_event', 'pointermove')}}-Ereignissen fügen Benutzeragenten mehrere Aktualisierungen in ein einzelnes Ereignis zusammen.
Dies hilft bei der Leistung, da der Benutzeragent weniger Ereignisverarbeitung durchführen muss, jedoch geht die Feinheit und Genauigkeit bei der Verfolgung verloren, insbesondere bei schnellen und großen Bewegungen.

Die **`getCoalescedEvents()`**-Methode ermöglicht Anwendungen den Zugriff auf alle nicht-koaleszierten Positionsänderungen für die präzise Handhabung von Zeigerbewegungsdaten, falls erforderlich.
Nicht-koaleszierte Positionsänderungen sind beispielsweise in Zeichenanwendungen wünschenswert, bei denen der Zugriff auf alle Ereignisse hilft, geschmeidigere Kurven zu erstellen, die besser der Bewegung eines Zeigers entsprechen.

Für eine Darstellung von koaleszierten Ereignissen siehe [Abbildung 7 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_coalesced).

## Syntax

```js-nolint
getCoalescedEvents()
```

### Parameter

Keine.

### Rückgabewert

Eine Sequenz von {{domxref('PointerEvent')}}-Instanzen.

## Beispiel

### HTML

```html
<canvas id="target" width="600" height="300"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("target");
const ctx = canvas.getContext("2d");

const pointerEvents = [];

function drawCircle(x, y, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the last 20 events
  if (pointerEvents.length > 20) {
    pointerEvents.shift();
  }
  pointerEvents.push({ x, y, color });

  for (const pointerEvent of pointerEvents) {
    ctx.beginPath();
    ctx.arc(pointerEvent.x, pointerEvent.y, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = pointerEvent.color;
    ctx.stroke();
  }
}

canvas.addEventListener("pointermove", (e) => {
  // draw a circle for the current event
  drawCircle(e.clientX, e.clientY, "black");

  const coalescedEvents = e.getCoalescedEvents();
  for (let coalescedEvent of coalescedEvents) {
    // give it an offset so we can see the difference and color it red
    drawCircle(coalescedEvent.clientX + 20, coalescedEvent.clientY + 20, "red");
  }
});
```

### Ergebnis

{{EmbedLiveSample("Example", "", "320")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
