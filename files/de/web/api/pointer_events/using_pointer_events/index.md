---
title: Verwendung von Zeigerereignissen
slug: Web/API/Pointer_events/Using_Pointer_Events
l10n:
  sourceCommit: 354059247ddb111a8d0dc9e71a437f3832f34366
---

{{DefaultAPISidebar("Pointer Events")}}

Dieser Leitfaden zeigt, wie Sie [Zeigerereignisse](/de/docs/Web/API/Pointer_events) und das HTML {{HTMLElement("canvas")}}-Element verwenden können, um eine Multi-Touch-fähige Zeichenanwendung zu erstellen. Dieses Beispiel basiert auf dem in der [Übersicht der Berührungsereignisse](/de/docs/Web/API/Touch_events), verwendet jedoch das {{domxref("PointerEvent","pointer events", "", 1)}}-Eingabemodell. Ein weiterer Unterschied besteht darin, dass die Anwendung aufgrund der Geräteunabhängigkeit von Zeigerereignissen eingabegerätebezogene Koordinateneingaben von einer Maus, einem Stift oder einem Finger mit demselben Code akzeptiert.

Diese Anwendung funktioniert nur in einem Browser, der Zeigerereignisse unterstützt.

## Definitionen

- Oberfläche
  - : Eine berührungsempfindliche Oberfläche. Dies kann ein Trackpad, ein Touchscreen oder sogar eine virtuelle Abbildung der Schreibtischoberfläche eines Benutzers (oder Mousepad) mit dem physischen Bildschirm sein.
- Berührungspunkt
  - : Ein Berührungspunkt mit der Oberfläche. Dies kann ein Finger (oder Ellbogen, Ohr, Nase, was auch immer, aber typischerweise ein Finger), ein Stylus, eine Maus oder eine andere Methode zum Spezifizieren eines einzelnen Punktes auf der Oberfläche sein.

## Beispiele

> [!NOTE]
> Der untenstehende Text verwendet den Begriff "Finger", wenn der Kontakt mit der Oberfläche beschrieben wird, aber es könnte natürlich auch ein Stylus, eine Maus oder eine andere Methode zum Zeigen auf eine Stelle sein.

### Zeichenanwendung

#### HTML

Das HTML besteht aus einem einzigen {{HTMLElement("canvas")}}-Element. Kurven werden als Reaktion auf die Berührungsgesten des Benutzers gezeichnet. Ein Button ist ebenfalls enthalten, um das Canvas zu leeren.

```html
<canvas id="canvas" width="600" height="600">
  Ihr Browser unterstützt das Canvas-Element nicht.
</canvas>
<button id="clear">Canvas leeren</button>
```

#### CSS

Die {{cssxref("touch-action")}}-Eigenschaft ist auf `none` gesetzt, um zu verhindern, dass der Browser sein standardmäßiges Touch-Verhalten auf die Anwendung anwendet.

```css
#canvas {
  border: solid black 1px;
  touch-action: none;
  display: block;
}
```

#### JavaScript

Wir werden alle laufenden Berührungen verfolgen und für jede dieser Linien zeichnen. Die `colors` werden verwendet, um zwischen verschiedenen Fingern zu unterscheiden.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Zuordnung von der pointerId zur aktuellen Fingerposition
const ongoingTouches = new Map();
const colors = ["red", "green", "blue"];
```

Die Funktion `handleStart` hört auf das {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis und zeichnet einen Kreis am Anfang der Berührung.

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

Die Funktion `handleEnd` hört auf das {{domxref("Element/pointerup_event", "pointerup")}}-Ereignis und zeichnet ein Quadrat am Ende der Berührung.

```js
function handleEnd(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`Ende: Konnte Berührung ${event.pointerId} nicht finden`);
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

Die Funktion `handleCancel` hört auf das {{domxref("Element/pointercancel_event", "pointercancel")}}-Ereignis und beendet die Verfolgung der Berührung.

```js
function handleCancel(event) {
  const touch = ongoingTouches.get(event.pointerId);

  if (!touch) {
    console.error(`Abbrechen: Konnte Berührung ${event.pointerId} nicht finden`);
    return;
  }

  ongoingTouches.delete(event.pointerId);
}

canvas.addEventListener("pointercancel", handleCancel, false);
```

Die Funktion `handleMove` hört auf das {{domxref("Element/pointermove_event", "pointermove")}}-Ereignis und zeichnet eine Linie zwischen dem Start und Ende der Berührung.

```js
function handleMove(event) {
  const touch = ongoingTouches.get(event.pointerId);

  // Ereignis wurde nicht gestartet
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

Schließlich wird die Löschfunktionalität hinzugefügt.

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

- [Zeigerereignisse](/de/docs/Web/API/Pointer_events)
- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
