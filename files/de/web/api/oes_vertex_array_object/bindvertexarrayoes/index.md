---
title: "OES_vertex_array_object: bindVertexArrayOES() Methode"
short-title: bindVertexArrayOES()
slug: Web/API/OES_vertex_array_object/bindVertexArrayOES
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.bindVertexArrayOES()`**-Methode
der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet ein
übergebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt an den Puffer.

## Syntax

```js-nolint
bindVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekt, das gebunden werden soll.

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
- WebGL2-Äquivalent: [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
