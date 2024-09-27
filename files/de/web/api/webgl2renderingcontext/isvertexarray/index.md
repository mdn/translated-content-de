---
title: "WebGL2RenderingContext: isVertexArray() Methode"
short-title: isVertexArray()
slug: Web/API/WebGL2RenderingContext/isVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isVertexArray()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das
übergebene Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt ist.

## Syntax

```js-nolint
isVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO) Objekt, das getestet werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der anzeigt, ob das gegebene Objekt ein gültiges
[`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt ist (`true`) oder nicht
(`false`).

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
