---
title: "WebGLRenderingContext: Methode getShaderPrecisionFormat()"
short-title: getShaderPrecisionFormat()
slug: Web/API/WebGLRenderingContext/getShaderPrecisionFormat
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.getShaderPrecisionFormat()`** der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein neues [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)-Objekt zurück, das den Bereich und die Präzision für das angegebene numerische Format des Shaders beschreibt.

## Syntax

```js-nolint
getShaderPrecisionFormat(shaderType, precisionType)
```

### Parameter

- `shaderType`
  - : Entweder ein `gl.FRAGMENT_SHADER` oder ein `gl.VERTEX_SHADER`.
- `precisionType`
  - : Ein Präzisionstyp-Wert. Entweder `gl.LOW_FLOAT`,
    `gl.MEDIUM_FLOAT`, `gl.HIGH_FLOAT`, `gl.LOW_INT`,
    `gl.MEDIUM_INT` oder `gl.HIGH_INT`.

### Rückgabewert

Ein [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)-Objekt oder `null`, falls ein Fehler auftritt.

### Ausnahmen

- `gl.INVALID_ENUM`, wenn die Shader- oder Präzisionstypen nicht erkannt werden.
- `gl.INVALID_OPERATION`, wenn der Shader-Compiler nicht unterstützt wird.

## Beispiele

Der folgende Code ermittelt das Präzisionsformat eines `gl.VERTEX_SHADER` mit einem `gl.MEDIUM_FLOAT`-Präzisionstyp.

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
