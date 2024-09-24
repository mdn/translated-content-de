---
title: "WebGLRenderingContext: Methode shaderSource()"
short-title: shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.shaderSource()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) setzt den Quellcode eines {{domxref("WebGLShader")}}.

## Syntax

```js-nolint
shaderSource(shader, source)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}-Objekt, in dem der Quellcode gesetzt wird.
- `source`
  - : Ein String, der den GLSL-Quellcode enthält, der gesetzt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

const source = gl.getShaderSource(shader);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
