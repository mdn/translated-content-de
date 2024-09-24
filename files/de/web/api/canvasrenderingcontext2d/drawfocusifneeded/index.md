---
title: "CanvasRenderingContext2D: drawFocusIfNeeded()-Methode"
short-title: drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.drawFocusIfNeeded()`**-Methode der Canvas 2D API zeichnet einen Fokusring um den aktuellen oder gegebenen Pfad, wenn das angegebene Element fokussiert ist.

## Syntax

```js-nolint
drawFocusIfNeeded(element)
drawFocusIfNeeded(path, element)
```

### Parameter

- `element`
  - : Das Element, das überprüft wird, ob es fokussiert ist oder nicht.
- `path`
  - : Ein {{domxref("Path2D")}}-Pfad, der verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwaltung des Schaltflächenfokus

Dieses Beispiel zeichnet zwei Schaltflächen auf eine Leinwand. Die `drawFocusIfNeeded()`-Methode wird verwendet, um bei Bedarf einen Fokusring zu zeichnen.

#### HTML

```html
<canvas id="canvas">
  <button id="button1">Continue</button>
  <button id="button2">Quit</button>
</canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

document.addEventListener("focus", redraw, true);
document.addEventListener("blur", redraw, true);
canvas.addEventListener("click", handleClick, false);
redraw();

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton(button1, 20, 20);
  drawButton(button2, 20, 80);
}

function handleClick(e) {
  // Klickkoordinaten berechnen
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // button1 fokussieren, falls zutreffend
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // button2 fokussieren, falls zutreffend
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // Schaltflächenhintergrund
  ctx.fillStyle = active ? "pink" : "lightgray";
  ctx.fillRect(x, y, width, height);

  // Schaltflächentext
  ctx.font = "15px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = active ? "blue" : "black";
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // Klickbaren Bereich definieren
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // Fokusring zeichnen, falls zutreffend
  ctx.drawFocusIfNeeded(el);
}
```

#### Ergebnis

{{EmbedLiveSample('Managing_button_focus', 700, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
