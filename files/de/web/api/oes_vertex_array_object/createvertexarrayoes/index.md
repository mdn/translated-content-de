---
title: "OES_vertex_array_object: createVertexArrayOES() Methode"
short-title: createVertexArrayOES()
slug: Web/API/OES_vertex_array_object/createVertexArrayOES
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`OES_vertex_array_object.createVertexArrayOES()`** Methode
der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
[`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt, das ein Vertex-Array-Objekt (VAO) darstellt. Dieses verweist auf Vertex-Array-Daten und ermöglicht es, Namen für verschiedene Sätze von Vertex-Daten zu vergeben.

## Syntax

```js-nolint
createVertexArrayOES()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject), das ein Vertex-Array-Objekt (VAO) darstellt, welches auf Vertex-Array-Daten verweist.

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
- WebGL2-Äquivalent: [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
