---
title: "WebGLShaderPrecisionFormat: rangeMax-Eigenschaft"
short-title: rangeMax
slug: Web/API/WebGLShaderPrecisionFormat/rangeMax
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLShaderPrecisionFormat.rangeMax`**-Eigenschaft gibt den Basis-2-Logarithmus des absoluten Wertes des maximal darstellbaren Wertes zurück.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax; // 24
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
