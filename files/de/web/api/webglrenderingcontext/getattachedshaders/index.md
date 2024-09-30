---
title: "WebGLRenderingContext: Methode getAttachedShaders()"
short-title: getAttachedShaders()
slug: Web/API/WebGLRenderingContext/getAttachedShaders
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getAttachedShaders()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt eine Liste von [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekten zurück, die an ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) gebunden sind.

## Syntax

```js-nolint
getAttachedShaders(program)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, um die gebundenen Shader abzurufen.

### Rückgabewert

Ein {{jsxref("Array")}} von [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekten, die an das angegebene `WebGLProgram` gebunden sind.

## Beispiele

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.getAttachedShaders(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
