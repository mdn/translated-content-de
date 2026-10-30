---
title: "OES_vertex_array_object: Methode deleteVertexArrayOES()"
short-title: deleteVertexArrayOES()
slug: Web/API/OES_vertex_array_object/deleteVertexArrayOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`OES_vertex_array_object.deleteVertexArrayOES()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt.

## Syntax

```js-nolint
deleteVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (VAO), das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …

ext.deleteVertexArrayOES(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
- WebGL2-Äquivalent: [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
