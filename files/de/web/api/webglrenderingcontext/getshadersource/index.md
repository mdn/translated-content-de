---
title: "WebGLRenderingContext: getShaderSource()-Methode"
short-title: getShaderSource()
slug: Web/API/WebGLRenderingContext/getShaderSource
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getShaderSource()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) gibt den Quellcode eines
[`WebGLShader`](/de/docs/Web/API/WebGLShader) als Zeichenkette zurück.

## Syntax

```js-nolint
getShaderSource(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt, aus dem der Quellcode abgerufen werden soll.

### Rückgabewert

Eine Zeichenkette, die den Quellcode des Shaders enthält.

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

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
