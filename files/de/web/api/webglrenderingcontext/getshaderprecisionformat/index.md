---
title: "WebGLRenderingContext: getShaderPrecisionFormat()-Methode"
short-title: getShaderPrecisionFormat()
slug: Web/API/WebGLRenderingContext/getShaderPrecisionFormat
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.getShaderPrecisionFormat()`** der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein neues [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)-Objekt zurück, das Bereich und Präzision für das angegebene numerische Shader-Format beschreibt.

## Syntax

```js-nolint
getShaderPrecisionFormat(shaderType, precisionType)
```

### Parameter

- `shaderType`
  - : Entweder ein `gl.FRAGMENT_SHADER` oder ein `gl.VERTEX_SHADER`.
- `precisionType`
  - : Ein Präzisionstypwert. Entweder `gl.LOW_FLOAT`, `gl.MEDIUM_FLOAT`, `gl.HIGH_FLOAT`, `gl.LOW_INT`, `gl.MEDIUM_INT` oder `gl.HIGH_INT`.

### Rückgabewert

Ein [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)-Objekt oder `null`, falls ein Fehler auftritt.

### Ausnahmen

- `gl.INVALID_ENUM`, wenn der Shader- oder Präzisionstyp nicht erkannt wird.
- `gl.INVALID_OPERATION`, wenn der Shader-Compiler nicht unterstützt wird.

## Beispiele

Der folgende Code ermittelt das Präzisionsformat eines `gl.VERTEX_SHADER` mit einem `gl.MEDIUM_FLOAT` Präzisionstyp.

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

- [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)
