---
title: "WebGLShaderPrecisionFormat: precision-Eigenschaft"
short-title: precision
slug: Web/API/WebGLShaderPrecisionFormat/precision
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLShaderPrecisionFormat.precision`**-Eigenschaft gibt die Anzahl der Präzisions-Bits zurück, die dargestellt werden können.

Bei Ganzzahlformaten ist dieser Wert immer 0.

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
