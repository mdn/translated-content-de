---
title: "OES_vertex_array_object: Methode isVertexArrayOES()"
short-title: isVertexArrayOES()
slug: Web/API/OES_vertex_array_object/isVertexArrayOES
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.isVertexArrayOES()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein {{domxref("WebGLVertexArrayObject")}} Objekt ist.

## Syntax

```js-nolint
isVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO) Objekt, das geprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API.Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein
{{domxref("WebGLVertexArrayObject")}} Objekt (`true`) ist oder nicht
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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2-Äquivalent: {{domxref("WebGL2RenderingContext.isVertexArray()")}}
