---
title: Verwendung von Pointer Events
slug: Web/API/Pointer_events/Using_Pointer_Events
l10n:
  sourceCommit: 354059247ddb111a8d0dc9e71a437f3832f34366
---

{{DefaultAPISidebar("Pointer Events")}}

Dieser Leitfaden zeigt, wie Sie [Pointer Events](/de/docs/Web/API/Pointer_events) und das HTML-{{HTMLElement("canvas")}}-Element verwenden, um eine Multi-Touch-fähige Zeichenanwendung zu erstellen. Dieses Beispiel basiert auf dem im [Touch-Events-Überblick](/de/docs/Web/API/Touch_events), verwendet jedoch das Eingabemodell der {{domxref("PointerEvent","pointer events", "", 1)}}. Ein weiterer Unterschied ist, dass die Anwendung, da Pointer Events geräteunabhängig sind, koordinatenbasierte Eingaben von einer Maus, einem Stift oder einer Fingerspitze mit demselben Code akzeptiert.

Diese Anwendung funktioniert nur in einem Browser, der Pointer Events unterstützt.

## Definitionen

- Oberfläche
  - : Eine berührungsempfindliche Oberfläche. Dies kann ein Trackpad, ein Touchscreen oder sogar eine virtuelle Abbildung der Schreibtischoberfläche (oder des Mauspads) eines Benutzers mit dem physischen Bildschirm sein.
- Berührungspunkt
  - : Ein Kontaktpunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger), ein Stift, eine Maus oder jede andere Methode zum Spezifizieren eines einzelnen Punktes auf der Oberfläche sein.

## Beispiele

> [!NOTE]
> Der nachfolgende Text verwendet den Begriff "Finger", um den Kontakt mit der Oberfläche zu beschreiben, aber es könnte natürlich auch ein Stift, eine Maus oder eine andere Methode zum Zeigen auf eine Stelle sein.

### Zeichenanwendung

#### HTML

Das HTML besteht aus einem einzigen {{HTMLElement("canvas")}}-Element. Kurven werden in Reaktion auf die Berührungsgesten des Benutzers gezeichnet. Ein Button ist ebenfalls enthalten, um die Zeichenfläche zu löschen.

```html
<canvas id="canvas" width="600" height="600">
  Your browser does not support the canvas element.
</canvas>
<button id="clear">Clear canvas</button>
```

#### CSS

Die {{cssxref("touch-action")}}-Eigenschaft ist auf `none` gesetzt, um zu verhindern, dass der Browser sein Standard-Touch-Verhalten auf die Anwendung anwendet.

```css
#canvas {
  border: solid black 1px;
  touch-action: none;
  display: block;
}
```

#### JavaScript

Wir werden alle laufenden Berührungen verfolgen und Linien für jede davon zeichnen. Die `colors` werden verwendet, um verschiedene Finger zu unterscheiden.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mapping from the pointerId to the current finger position
const ongoingTouches = new Map();
const colors = ["red", "green", "blue"];
```

Die Funktion `handleStart` hört auf das [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Event und zeichnet einen Kreis am Beginn der Berührung.

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

Die Funktion `handleEnd` hört auf das [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Event und zeichnet ein Quadrat am Ende der Berührung.

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

Die Funktion `handleCancel` hört auf das [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Event und stoppt die Verfolgung der Berührung.

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

Die Funktion `handleMove` hört auf das [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Event und zeichnet eine Linie zwischen dem Start- und Endpunkt der Berührung.

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

Abschließend fügen Sie eine Löschfunktion hinzu.

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
