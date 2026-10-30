---
title: "OES_vertex_array_object: bindVertexArrayOES()-Methode"
short-title: bindVertexArrayOES()
slug: Web/API/OES_vertex_array_object/bindVertexArrayOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`OES_vertex_array_object.bindVertexArrayOES()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt an den Buffer.

## Syntax

```js-nolint
bindVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (VAO), das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
- Entsprechende Methode in WebGL2: [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
