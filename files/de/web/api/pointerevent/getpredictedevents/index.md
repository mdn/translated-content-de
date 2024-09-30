---
title: "PointerEvent: getPredictedEvents() Methode"
short-title: getPredictedEvents()
slug: Web/API/PointerEvent/getPredictedEvents
l10n:
  sourceCommit: 84c430110b84fae0335959184ce73f03124220fd
---

{{APIRef("Pointer Events")}}

Die **`getPredictedEvents()`**-Methode des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die geschätzte zukünftige Positionen für Zeiger darstellen. Wie die vorhergesagten Positionen berechnet werden, hängt vom Benutzeragenten ab, basiert jedoch auf vergangenen Punkten, aktueller Geschwindigkeit und Flugbahn.

Anwendungen können die vorhergesagten Ereignisse nutzen, um "vorauszuzeichnen" zu einer vorhergesagten Position, was die wahrgenommene Latenz je nach Interpretation der vorhergesagten Ereignisse und dem Anwendungsfall verringern kann.

Für eine Darstellung der vorhergesagten Ereignisse, siehe [Abbildung 8 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_predicted).

## Syntax

```js-nolint
getPredictedEvents()
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

  const predictedEvents = e.getPredictedEvents();
  for (let predictedEvent of predictedEvents) {
    // give it an offset so we can see the difference and color it red
    drawCircle(predictedEvent.clientX + 20, predictedEvent.clientY + 20, "red");
  }
});
```

### Ergebnis

{{EmbedLiveSample("Example", "", "320")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
