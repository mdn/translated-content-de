---
title: "WebGLShaderPrecisionFormat: precision-Eigenschaft"
short-title: precision
slug: Web/API/WebGLShaderPrecisionFormat/precision
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLShaderPrecisionFormat.precision`**-Eigenschaft gibt die Anzahl der Präzisionsbits zurück, die dargestellt werden können.

Für Integer-Formate ist dieser Wert immer 0.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision; // 23
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
