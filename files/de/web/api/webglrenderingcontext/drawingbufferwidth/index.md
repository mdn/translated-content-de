---
title: "WebGLRenderingContext: drawingBufferWidth Eigenschaft"
short-title: drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLRenderingContext.drawingBufferWidth`**-Eigenschaft repräsentiert die tatsächliche Breite des aktuellen Zeichenpuffers. Sie sollte mit dem `width`-Attribut des mit diesem Kontext verknüpften {{HTMLElement("canvas")}}-Elements übereinstimmen, kann jedoch abweichen, wenn die Implementierung nicht in der Lage ist, die angeforderte Breite bereitzustellen.

## Wert

Eine Zahl.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können die Breite des Zeichenpuffers mit den folgenden Zeilen erhalten:

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

- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
