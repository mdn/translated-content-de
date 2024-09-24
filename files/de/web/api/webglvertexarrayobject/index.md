---
title: WebGLVertexArrayObject
slug: Web/API/WebGLVertexArrayObject
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGLVertexArrayObject`** Schnittstelle ist Teil der [WebGL 2 API](/de/docs/Web/API/WebGL_API), repräsentiert Vertex-Array-Objekte (VAOs), die auf Vertex-Array-Daten verweisen, und bietet Namen für verschiedene Sätze von Vertex-Daten.

{{InheritanceDiagram}}

Bei der Arbeit mit `WebGLVertexArrayObject`-Objekten sind die folgenden Methoden nützlich:

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}

> [!NOTE]
> Die {{domxref("OES_vertex_array_object")}} Erweiterung ermöglicht die Verwendung von Vertex-Array-Objekten in einem WebGL 1 Kontext.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("OES_vertex_array_object")}}
