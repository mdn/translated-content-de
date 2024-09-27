---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLShaderPrecisionFormat**-Schnittstelle ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt die Informationen dar, die durch den Aufruf der Methode [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat) zurückgegeben werden.

## Instanz-Eigenschaften

- [`WebGLShaderPrecisionFormat.rangeMin`](/de/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin) {{ReadOnlyInline}}
  - : Der Basis-2-Logarithmus des absoluten Wertes des minimal darstellbaren Wertes.
- [`WebGLShaderPrecisionFormat.rangeMax`](/de/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax) {{ReadOnlyInline}}
  - : Der Basis-2-Logarithmus des absoluten Wertes des maximal darstellbaren Wertes.
- [`WebGLShaderPrecisionFormat.precision`](/de/docs/Web/API/WebGLShaderPrecisionFormat/precision) {{ReadOnlyInline}}
  - : Die Anzahl der Bits der Genauigkeit, die dargestellt werden können. Für Ganzzahlformate ist dieser Wert immer 0.

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
