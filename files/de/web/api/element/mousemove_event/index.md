---
title: "Element: mousemove-Ereignis"
short-title: mousemove
slug: Web/API/Element/mousemove_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das `mousemove`-Ereignis wird auf einem Element ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) bewegt wird, während sich der Hotspot des Cursors darin befindet.

Diese Ereignisse treten auf, unabhängig davon, ob eine Maustaste gedrückt ist oder nicht. Sie können mit einer sehr hohen Rate ausgelöst werden, abhängig davon, wie schnell der Benutzer die Maus bewegt, wie schnell der Computer ist, welche anderen Aufgaben und Prozesse ausgeführt werden, usw.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mousemove", (event) => { })

onmousemove = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Das folgende Beispiel verwendet die [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-, `mousemove`- und [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignisse, um dem Benutzer zu ermöglichen, auf einem HTML-[canvas](/de/docs/Web/API/Canvas_API) zu zeichnen. Die Funktionalität ist einfach: Die Linienbreite ist auf 1 gesetzt, und die Farbe ist immer schwarz.

Beim Laden der Seite werden die Konstanten `myPics` und `context` erstellt, um eine Referenz auf das Canvas und den 2D-Kontext zu speichern, den wir zum Zeichnen verwenden werden.

Das Zeichnen beginnt, wenn das `mousedown`-Ereignis ausgelöst wird. Zuerst speichern wir die x- und y-Koordinaten des Mauszeigers in den Variablen `x` und `y` und setzen dann `isDrawing` auf `true`.

Wenn sich die Maus über die Seite bewegt, wird das `mousemove`-Ereignis ausgelöst. Wenn `isDrawing` `true` ist, ruft der Ereignishandler die Funktion `drawLine` auf, um eine Linie von den gespeicherten `x`- und `y`-Werten zur aktuellen Position zu zeichnen.

Wenn die `drawLine()`-Funktion zurückkehrt, passen wir die Koordinaten an und speichern sie dann in `x` und `y`.

Das `mouseup`-Ereignis zeichnet das letzte Liniensegment, setzt `x` und `y` auf `0` und beendet das weitere Zeichnen, indem es `isDrawing` auf `false` setzt.

### HTML

```html
<h1>Drawing with mouse events</h1>
<canvas id="myPics" width="560" height="360"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}
```

### JavaScript

```js
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
