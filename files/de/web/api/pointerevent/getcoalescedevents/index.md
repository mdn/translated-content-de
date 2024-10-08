---
title: "PointerEvent: Methode getCoalescedEvents()"
short-title: getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
l10n:
  sourceCommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{APIRef("Pointer Events")}} {{secureContext_header}}

Die **`getCoalescedEvents()`**-Methode der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die zu einem einzelnen [`pointermove`](/de/docs/Web/API/Element/pointermove_event) oder [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)-Ereignis zusammengefasst (koalesziert) wurden.
Anstatt eines kontinuierlichen Stroms von vielen [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen fassen Benutzeragenten mehrere Aktualisierungen zu einem einzigen Ereignis zusammen.
Dies hilft bei der Leistung, da der Benutzeragent weniger Ereignisbearbeitung durchführen muss, aber es gibt eine Verringerung der Granularität und Genauigkeit beim Tracking, insbesondere bei schnellen und großen Bewegungen.

Die **`getCoalescedEvents()`**-Methode ermöglicht es Anwendungen, auf alle nicht zusammengefassten Positionsänderungen zuzugreifen, um eine präzise Behandlung der Zeigerbewegungsdaten dort zu ermöglichen, wo es notwendig ist.
Nicht zusammengefasste Positionsänderungen sind in Zeichenanwendungen wünschenswert, da der Zugriff auf alle Ereignisse hilft, glattere Kurven zu erzeugen, die besser der Zeigerbewegung entsprechen.

Eine Darstellung der koaleszierten Ereignisse finden Sie in [Abbildung 7 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_coalesced).

## Syntax

```js-nolint
getCoalescedEvents()
```

### Parameter

Keine.

### Rückgabewert

Eine Sequenz von [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Instanzen.

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
