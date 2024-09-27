---
title: "WebGLRenderingContext: drawingBufferHeight Eigenschaft"
short-title: drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLRenderingContext.drawingBufferHeight`**
Eigenschaft repräsentiert die tatsächliche Höhe des aktuellen Zeichnungspuffers. Sie sollte mit dem
`height`-Attribut des mit diesem Kontext verbundenen {{HTMLElement("canvas")}}-Elements übereinstimmen, kann jedoch abweichen, wenn die Implementierung nicht in der Lage ist, die gewünschte Höhe bereitzustellen.

## Wert

Eine Zahl.

## Beispiele

Gegebenes {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können die Höhe des Zeichnungspuffers mit den folgenden Zeilen ermitteln:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferHeight; // 150
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawingBufferWidth`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
