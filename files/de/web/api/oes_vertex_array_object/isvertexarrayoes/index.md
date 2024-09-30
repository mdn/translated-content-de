---
title: "OES_vertex_array_object: isVertexArrayOES()-Methode"
short-title: isVertexArrayOES()
slug: Web/API/OES_vertex_array_object/isVertexArrayOES
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.isVertexArrayOES()`**-Methode des
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt ist.

## Syntax

```js-nolint
isVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekt, das getestet werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein
[`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (`true`) ist oder nicht
(`false`).

## Beispiele

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …

ext.isVertexArrayOES(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
- WebGL2-Äquivalent: [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
