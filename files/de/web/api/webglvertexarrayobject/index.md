---
title: WebGLVertexArrayObject
slug: Web/API/WebGLVertexArrayObject
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGLVertexArrayObject`**-Schnittstelle ist Teil der [WebGL 2 API](/de/docs/Web/API/WebGL_API), repräsentiert Vertex-Array-Objekte (VAOs), die auf Vertex-Array-Daten verweisen, und stellt Namen für verschiedene Sätze von Vertex-Daten bereit.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLVertexArrayObject`-Objekten sind die folgenden Methoden nützlich:

- [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
- [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
- [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
- [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)

> [!NOTE]
> Die Erweiterung [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object) ermöglicht die Verwendung von Vertex-Array-Objekten in einem WebGL-1-Kontext.

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

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

- [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)
