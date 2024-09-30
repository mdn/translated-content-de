---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLShaderPrecisionFormat**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt die Informationen dar, die beim Aufruf der Methode [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat) zurückgegeben werden.

## Instanzeigenschaften

- [`WebGLShaderPrecisionFormat.rangeMin`](/de/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin) {{ReadOnlyInline}}
  - : Der Logarithmus zur Basis 2 des absoluten Wertes des minimalen darstellbaren Werts.
- [`WebGLShaderPrecisionFormat.rangeMax`](/de/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax) {{ReadOnlyInline}}
  - : Der Logarithmus zur Basis 2 des absoluten Wertes des maximalen darstellbaren Werts.
- [`WebGLShaderPrecisionFormat.precision`](/de/docs/Web/API/WebGLShaderPrecisionFormat/precision) {{ReadOnlyInline}}
  - : Die Anzahl der darstellbaren Präzisionsbits. Für ganzzahlige Formate ist dieser Wert immer 0.

## Beispiele

Ein `WebGLShaderPrecisionFormat`-Objekt wird von der Methode [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat) zurückgegeben.

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
