---
title: "CanvasPattern: setTransform() Methode"
short-title: setTransform()
slug: Web/API/CanvasPattern/setTransform
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasPattern.setTransform()`** Methode verwendet ein {{domxref("DOMMatrix")}}-Objekt als Transformationsmatrix des Musters und wendet es auf das Muster an.

## Syntax

```js-nolint
setTransform(matrix)
```

### Parameter

- `matrix`
  - : Eine {{domxref("DOMMatrix")}}, die als Transformationsmatrix des Musters verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `setTransform` Methode

Dies ist nur ein einfaches Codebeispiel, das die `setTransform` Methode verwendet, um ein {{domxref("CanvasPattern")}} mit der angegebenen Mustertransformation aus einer {{domxref("DOMMatrix")}} zu erstellen. Das Muster wird angewendet, wenn Sie es als aktuelles {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} festlegen und auf die Leinwand zeichnen, zum Beispiel mit der {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src = "canvas_createpattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

#### Editierbare Demo

Hier ist eine editierbare Demo des obigen Codebeispiels. Versuchen Sie, das Argument von `SetTransform()` zu ändern, um die Auswirkungen zu sehen.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
const img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = () => {
  const pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Editable_demo', 700, 400) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
