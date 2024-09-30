---
title: "WebGLRenderingContext: isShader()-Methode"
short-title: isShader()
slug: Web/API/WebGLRenderingContext/isShader
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isShader()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene [`WebGLShader`](/de/docs/Web/API/WebGLShader) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isShader(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), der überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Shader gültig ist oder nicht.

## Beispiele

### Überprüfen eines Shaders

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const shader = gl.createShader(gl.VERTEX_SHADER);

// …

gl.isShader(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
