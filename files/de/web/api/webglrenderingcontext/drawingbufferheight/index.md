---
title: "WebGLRenderingContext: Eigenschaft drawingBufferHeight"
short-title: drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLRenderingContext.drawingBufferHeight`**-Eigenschaft repräsentiert die tatsächliche Höhe des aktuellen Zeichenpuffers. Sie sollte dem `height`-Attribut des mit diesem Kontext verbundenen {{HTMLElement("canvas")}} Elements entsprechen, kann jedoch abweichen, wenn die Implementierung nicht in der Lage ist, die angeforderte Höhe bereitzustellen.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas"></canvas>
```

Sie können die Höhe des Zeichenpuffers mit den folgenden Zeilen abrufen:

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

- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
