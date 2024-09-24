---
title: "WebGL2RenderingContext: Methode deleteVertexArray()"
short-title: deleteVertexArray()
slug: Web/API/WebGL2RenderingContext/deleteVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.deleteVertexArray()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes {{domxref("WebGLVertexArrayObject")}}-Objekt.

## Syntax

```js-nolint
deleteVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO)-Objekt, das gelöscht werden soll.

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

- {{domxref("WebGLVertexArrayObject")}}
