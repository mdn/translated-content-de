---
title: "OES_vertex_array_object: Methode createVertexArrayOES()"
short-title: createVertexArrayOES()
slug: Web/API/OES_vertex_array_object/createVertexArrayOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`OES_vertex_array_object.createVertexArrayOES()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt. Dieses stellt ein Vertex-Array-Objekt (VAO) dar, das auf Vertex-Array-Daten verweist und verschiedene Sätze von Vertex-Daten benennbar macht.

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
- Entsprechende Methode in WebGL2: [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
