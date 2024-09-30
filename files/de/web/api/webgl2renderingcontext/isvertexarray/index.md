---
title: "WebGL2RenderingContext: isVertexArray()-Methode"
short-title: isVertexArray()
slug: Web/API/WebGL2RenderingContext/isVertexArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.isVertexArray()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt ist.

## Syntax

```js-nolint
isVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekt, das getestet werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (`true`) oder nicht (`false`) ist.

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.isVertexArray(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)
