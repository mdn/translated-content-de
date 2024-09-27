---
title: "CanvasRenderingContext2D: drawFocusIfNeeded() Methode"
short-title: drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.drawFocusIfNeeded()`**
des Canvas 2D API zeichnet einen Fokusring um den aktuellen oder gegebenen Pfad, wenn das
angegebene Element fokussiert ist.

## Syntax

```js-nolint
drawFocusIfNeeded(element)
drawFocusIfNeeded(path, element)
```

### Parameter

- `element`
  - : Das Element, das überprüft wird, ob es fokussiert ist oder nicht.
- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D) Pfad, der verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwaltung des Schaltflächenfokus

Dieses Beispiel zeichnet zwei Schaltflächen auf eine Leinwand. Die Methode `drawFocusIfNeeded()` wird verwendet, um bei Bedarf einen Fokusring zu zeichnen.

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
  // Calculate click coordinates
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // Focus button1, if appropriate
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // Focus button2, if appropriate
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // Button background
  ctx.fillStyle = active ? "pink" : "lightgray";
  ctx.fillRect(x, y, width, height);

  // Button text
  ctx.font = "15px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = active ? "blue" : "black";
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // Define clickable area
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // Draw focus ring, if appropriate
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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
