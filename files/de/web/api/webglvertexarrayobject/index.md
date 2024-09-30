---
title: WebGLVertexArrayObject
slug: Web/API/WebGLVertexArrayObject
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLVertexArrayObject`**-Interface ist Teil der [WebGL 2 API](/de/docs/Web/API/WebGL_API), repräsentiert Vertex-Array-Objekte (VAOs), die auf Vertex-Array-Daten verweisen, und bietet Namen für verschiedene Sätze von Vertex-Daten.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLVertexArrayObject`-Objekten sind die folgenden Methoden nützlich:

- [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
- [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
- [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
- [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)

> [!NOTE]
> Die [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)-Erweiterung ermöglicht die Nutzung von Vertex-Array-Objekten in einem WebGL-1-Kontext.

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
