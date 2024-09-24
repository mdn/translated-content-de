---
title: "WebGLRenderingContext: Methode createShader()"
short-title: createShader()
slug: Web/API/WebGLRenderingContext/createShader
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebGL")}}

Die Methode **`createShader()`** des {{domxref("WebGLRenderingContext")}} der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt ein {{domxref("WebGLShader")}}, das dann weiter konfiguriert werden kann, indem {{domxref("WebGLRenderingContext.shaderSource()")}} und {{domxref("WebGLRenderingContext.compileShader()")}} verwendet werden.

## Syntax

```js-nolint
createShader(type)
```

### Parameter

- `type`
  - : Entweder `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`

### Rückgabewert

Ein neues ({{domxref("WebGLShader")}}).

## Beispiele

Siehe {{domxref("WebGLShader")}} für Nutzung und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
