---
title: "WebGLShaderPrecisionFormat: rangeMax-Eigenschaft"
short-title: rangeMax
slug: Web/API/WebGLShaderPrecisionFormat/rangeMax
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLShaderPrecisionFormat.rangeMax`**-Eigenschaft gibt den Basis-2-Logarithmus des absoluten Werts des maximal darstellbaren Wertes zurück.

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
