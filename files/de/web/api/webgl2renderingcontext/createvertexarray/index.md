---
title: "WebGL2RenderingContext: createVertexArray() Methode"
short-title: createVertexArray()
slug: Web/API/WebGL2RenderingContext/createVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.createVertexArray()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt, das ein Vertex-Array-Objekt (VAO) darstellt. Dieses zeigt auf Vertex-Array-Daten und bietet Bezeichnungen für verschiedene Sätze von Vertex-Daten.

## Syntax

```js-nolint
createVertexArray()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject), das ein Vertex-Array-Objekt (VAO) darstellt, welches auf Vertex-Array-Daten zeigt.

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

- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)
