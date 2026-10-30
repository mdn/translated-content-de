---
title: "OES_vertex_array_object: Methode isVertexArrayOES()"
short-title: isVertexArrayOES()
slug: Web/API/OES_vertex_array_object/isVertexArrayOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`OES_vertex_array_object.isVertexArrayOES()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt ist.

## Syntax

```js-nolint
isVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (VAO), das geprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das übergebene Objekt ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt ist (`true`) oder nicht (`false`).

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
- Entsprechende Methode in WebGL2: [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
