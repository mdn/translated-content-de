---
title: "WebGLRenderingContext: drawingBufferWidth-Eigenschaft"
short-title: drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLRenderingContext.drawingBufferWidth`**-Eigenschaft gibt die tatsächliche Breite des aktuellen Zeichenpuffers an. Sie sollte mit dem `width`-Attribut des {{HTMLElement("canvas")}}-Elements übereinstimmen, das mit diesem Kontext verknüpft ist, kann jedoch abweichen, falls die Implementierung nicht in der Lage ist, die angeforderte Breite bereitzustellen.

## Wert

Eine Zahl.

## Beispiele

Angenommen, folgendes {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können die Breite des Zeichenpuffers mit den folgenden Zeilen abrufen:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferWidth; // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawingBufferHeight`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
