---
title: "WebGLRenderingContext: Methode getShaderSource()"
short-title: getShaderSource()
slug: Web/API/WebGLRenderingContext/getShaderSource
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getShaderSource()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) gibt den Quellcode eines
{{domxref("WebGLShader")}} als Zeichenfolge zurück.

## Syntax

```js-nolint
getShaderSource(shader)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}-Objekt, von dem der Quellcode abgerufen werden soll.

### Rückgabewert

Eine Zeichenfolge, die den Quellcode des Shaders enthält.

## Beispiele

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

const source = gl.getShaderSource(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
