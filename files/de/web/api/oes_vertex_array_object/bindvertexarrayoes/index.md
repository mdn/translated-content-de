---
title: "OES_vertex_array_object: bindVertexArrayOES() Methode"
short-title: bindVertexArrayOES()
slug: Web/API/OES_vertex_array_object/bindVertexArrayOES
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.bindVertexArrayOES()`** Methode
der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein
übergebenes {{domxref("WebGLVertexArrayObject")}} Objekt an den Puffer.

## Syntax

```js-nolint
bindVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO) Objekt, das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …
// Aufrufe von bindBuffer oder vertexAttribPointer
// die im VAO "aufgezeichnet" werden
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2-Äquivalent: {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
