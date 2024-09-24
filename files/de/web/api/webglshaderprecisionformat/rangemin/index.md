---
title: "WebGLShaderPrecisionFormat: rangeMin-Eigenschaft"
short-title: rangeMin
slug: Web/API/WebGLShaderPrecisionFormat/rangeMin
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLShaderPrecisionFormat.rangeMin`**-Eigenschaft gibt den Basis-2-Logarithmus des absoluten Wertes des minimalen Wertes zurück, der dargestellt werden kann.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin; // 24
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
