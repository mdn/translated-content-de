---
title: "Element: mousemove-Ereignis"
short-title: mousemove
slug: Web/API/Element/mousemove_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das `mousemove`-Ereignis wird an einem Element ausgelöst, wenn ein Zeigegerät (üblicherweise eine Maus) bewegt wird, während sich der Hotspot des Mauszeigers innerhalb des Elements befindet.

Diese Ereignisse treten unabhängig davon auf, ob Maustasten gedrückt sind. Sie können sehr häufig ausgelöst werden – abhängig davon, wie schnell die Maus bewegt wird, wie leistungsfähig der Computer ist und welche anderen Aufgaben und Prozesse gerade ausgeführt werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mousemove", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmousemove = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Das folgende Beispiel verwendet die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event), `mousemove` und [`mouseup`](/de/docs/Web/API/Element/mouseup_event), damit Benutzer auf einem HTML-[Canvas](/de/docs/Web/API/Canvas_API) zeichnen können. Die Funktionsweise ist einfach: Die Linienstärke ist auf 1 festgelegt, und die Farbe ist immer Schwarz.

Beim Laden der Seite werden die Konstanten `myPics` und `context` erstellt. Sie speichern Referenzen auf das Canvas und den 2D-Kontext, der zum Zeichnen verwendet wird.

Das Zeichnen beginnt, wenn das `mousedown`-Ereignis ausgelöst wird. Zuerst werden die x- und y-Koordinaten des Mauszeigers in den Variablen `x` und `y` gespeichert. Anschließend wird `isDrawing` auf `true` gesetzt.

Während sich die Maus über die Seite bewegt, wird das `mousemove`-Ereignis ausgelöst. Wenn `isDrawing` den Wert `true` hat, ruft der Event-Handler die Funktion `drawLine` auf, um eine Linie von den gespeicherten Werten `x` und `y` zur aktuellen Position zu zeichnen.

Nachdem die Funktion `drawLine()` zurückgekehrt ist, werden die Koordinaten aktualisiert und in `x` und `y` gespeichert.

Das `mouseup`-Ereignis zeichnet das letzte Liniensegment, setzt `x` und `y` auf `0` und beendet das Zeichnen, indem es `isDrawing` auf `false` setzt.

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
