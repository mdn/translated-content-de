---
title: "WebGL2RenderingContext: Methode createVertexArray()"
short-title: createVertexArray()
slug: Web/API/WebGL2RenderingContext/createVertexArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.createVertexArray()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
[`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt, das ein Vertex Array Objekt (VAO) darstellt. Dieses verweist auf Vertex-Array-Daten und bietet Namen für verschiedene Sätze von Vertex-Daten.

## Syntax

```js-nolint
createVertexArray()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject), das ein Vertex Array Objekt (VAO) darstellt, das auf Vertex-Array-Daten verweist.

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
