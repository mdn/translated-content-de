---
title: "WebGLRenderingContext: createShader()-Methode"
short-title: createShader()
slug: Web/API/WebGLRenderingContext/createShader
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`createShader()`** des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) in der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), der anschließend weiter mit [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) und [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) konfiguriert werden kann.

## Syntax

```js-nolint
createShader(type)
```

### Parameter

- `type`
  - : Entweder `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`

### Rückgabewert

Ein neuer ([`WebGLShader`](/de/docs/Web/API/WebGLShader)).

## Beispiele

Siehe [`WebGLShader`](/de/docs/Web/API/WebGLShader) für Nutzung und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)
- [`WebGLShader`](/de/docs/Web/API/WebGLShader)
- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
- [`WebGLRenderingContext.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
- [`WebGLRenderingContext.detachShader()`](/de/docs/Web/API/WebGLRenderingContext/detachShader)
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
