---
title: "WebGLRenderingContext: drawingBufferHeight Eigenschaft"
short-title: drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLRenderingContext.drawingBufferHeight`**-Eigenschaft repräsentiert die tatsächliche Höhe des aktuellen Zeichnungsbuffers. Sie sollte mit dem `height`-Attribut des mit diesem Kontext verbundenen {{HTMLElement("canvas")}}-Elements übereinstimmen, kann jedoch abweichen, wenn die Implementierung nicht in der Lage ist, die angeforderte Höhe bereitzustellen.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können die Höhe des Zeichnungsbuffers mit den folgenden Zeilen abrufen:

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
