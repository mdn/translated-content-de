---
title: Verwendung von Pointer Events
slug: Web/API/Pointer_events/Using_Pointer_Events
l10n:
  sourceCommit: 354059247ddb111a8d0dc9e71a437f3832f34366
---

{{DefaultAPISidebar("Pointer Events")}}

Dieser Leitfaden zeigt, wie man [Pointer Events](/de/docs/Web/API/Pointer_events) und das HTML-{{HTMLElement("canvas")}}-Element verwendet, um eine Multi-Touch-fähige Zeichenanwendung zu erstellen. Dieses Beispiel basiert auf dem in der [Übersicht zu Touch Events](/de/docs/Web/API/Touch_events), verwendet jedoch das Eingabe-Ereignismodell der [Pointer Events](/de/docs/Web/API/PointerEvent). Ein weiterer Unterschied ist, dass die Anwendung aufgrund der Geräteunabhängigkeit von Pointer Events koordinatenbasierte Eingaben von einer Maus, einem Stift oder einem Finger mit demselben Code akzeptiert.

Diese Anwendung funktioniert nur in einem Browser, der Pointer Events unterstützt.

## Definitionen

- Oberfläche
  - : Eine berührungsempfindliche Oberfläche. Dies kann ein Trackpad, ein Touchscreen oder sogar eine virtuelle Abbildung der Schreibtischoberfläche (oder des Mauspads) des Benutzers mit dem physischen Bildschirm sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger), ein Stift, eine Maus oder eine andere Methode zur Angabe eines einzelnen Punkts auf der Oberfläche sein.

## Beispiele

> [!NOTE]
> Der untenstehende Text verwendet den Begriff "Finger", um den Kontakt mit der Oberfläche zu beschreiben, es könnte natürlich auch ein Stift, eine Maus oder eine andere Methode sein, um auf einen Ort zu zeigen.

### Zeichenanwendung

#### HTML

Das HTML besteht aus einem einzigen {{HTMLElement("canvas")}}-Element. Kurven werden als Reaktion auf die Berührungsgesten des Benutzers gezeichnet. Ein Button ist ebenfalls enthalten, um die Leinwand zu löschen.

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support the canvas element.
</canvas>
<button id="clear">Clear canvas</button>
```

#### CSS

Die {{cssxref("touch-action")}}-Eigenschaft ist auf `none` gesetzt, um zu verhindern, dass der Browser seine standardmäßige Touch-Verhalten auf die Anwendung anwendet.

```css
#canvas {
  border: solid black 1px;
  touch-action: none;
  display: block;
}
```

#### JavaScript

Wir werden alle laufenden Berührungen verfolgen und Linien für jede von ihnen zeichnen. Die `colors` werden verwendet, um zwischen verschiedenen Fingern zu unterscheiden.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mapping from the pointerId to the current finger position
const ongoingTouches = new Map();
const colors = ["red", "green", "blue"];
```

Die Funktion `handleStart` hört auf das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis und zeichnet einen Kreis am Start der Berührung.

```js
function handleStart(event) {
  const touch = {
    pageX: event.pageX,
    pageY: event.pageY,
    color: colors[ongoingTouches.size % colors.length],
  };
  ongoingTouches.set(event.pointerId, touch);

  ctx.beginPath();
  ctx.arc(touch.pageX, touch.pageY, 4, 0, 2 * Math.PI, false);
  ctx.fillStyle = touch.color;
  ctx.fill();
}

canvas.addEventListener("pointerdown", handleStart, false);
```

Die Funktion `handleEnd` hört auf das [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignis und zeichnet ein Quadrat am Ende der Berührung.

```js
function handleEnd(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`End: Could not find touch ${event.pointerId}`);
    return;
  }

  ctx.lineWidth = 4;
  ctx.fillStyle = touch.color;
  ctx.beginPath();
  ctx.moveTo(touch.pageX, touch.pageY);
  ctx.lineTo(event.pageX, event.pageY);
  ctx.fillRect(event.pageX - 4, event.pageY - 4, 8, 8);
  ongoingTouches.delete(event.pointerId);
}

canvas.addEventListener("pointerup", handleEnd, false);
```

Die Funktion `handleCancel` hört auf das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis und stoppt die Verfolgung der Berührung.

```js
function handleCancel(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`Cancel: Could not find touch ${event.pointerId}`);
    return;
  }

  ongoingTouches.delete(event.pointerId);
}

canvas.addEventListener("pointercancel", handleCancel, false);
```

Die Funktion `handleMove` hört auf das [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis und zeichnet eine Linie zwischen dem Start und Ende der Berührung.

```js
function handleMove(event) {
  const touch = ongoingTouches.get(event.pointerId);

  // Event was not started
  if (!touch) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(touch.pageX, touch.pageY);
  ctx.lineTo(event.pageX, event.pageY);
  ctx.lineWidth = 4;
  ctx.strokeStyle = touch.color;
  ctx.stroke();

  const newTouch = {
    pageX: event.pageX,
    pageY: event.pageY,
    color: touch.color,
  };

  ongoingTouches.set(event.pointerId, newTouch);
}

canvas.addEventListener("pointermove", handleMove, false);
```

Schließlich fügen Sie eine Löschfunktion hinzu.

```js
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
```

{{EmbedLiveSample("drawing_application", "", "700")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pointer Events](/de/docs/Web/API/Pointer_events)
- [Touch Events](/de/docs/Web/API/Touch_events)
