---
title: "OES_vertex_array_object: Methode deleteVertexArrayOES()"
short-title: deleteVertexArrayOES()
slug: Web/API/OES_vertex_array_object/deleteVertexArrayOES
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.deleteVertexArrayOES()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes {{domxref("WebGLVertexArrayObject")}}-Objekt.

## Syntax

```js-nolint
deleteVertexArrayOES(arrayObject)
```

### Parameter

- `arrayObject`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO)-Objekt, das gelöscht werden soll.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2-Äquivalent: {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
