---
title: "WebGL2RenderingContext: isVertexArray()-Methode"
short-title: isVertexArray()
slug: Web/API/WebGL2RenderingContext/isVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isVertexArray()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLVertexArrayObject")}}-Objekt ist.

## Syntax

```js-nolint
isVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO)-Objekt, das getestet werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein gültiges
{{domxref("WebGLVertexArrayObject")}}-Objekt (`true`) oder nicht (`false`) ist.

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

- {{domxref("WebGLVertexArrayObject")}}
