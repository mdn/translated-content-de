---
title: "WebGL2RenderingContext: deleteVertexArray()-Methode"
short-title: deleteVertexArray()
slug: Web/API/WebGL2RenderingContext/deleteVertexArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.deleteVertexArray()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt.

## Syntax

```js-nolint
deleteVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.deleteVertexArray(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)
