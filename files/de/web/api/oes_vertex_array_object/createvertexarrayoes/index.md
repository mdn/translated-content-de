---
title: "OES_vertex_array_object: Methode createVertexArrayOES()"
short-title: createVertexArrayOES()
slug: Web/API/OES_vertex_array_object/createVertexArrayOES
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die Methode **`OES_vertex_array_object.createVertexArrayOES()`** des [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein {{domxref("WebGLVertexArrayObject")}}-Objekt, das ein Vertex Array Object (VAO) repräsentiert, das auf Vertex-Array-Daten zeigt und Namen für verschiedene Sätze von Vertex-Daten bereitstellt.

## Syntax

```js-nolint
createVertexArrayOES()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLVertexArrayObject")}}, das ein Vertex Array Object (VAO) repräsentiert, welches auf Vertex-Array-Daten zeigt.

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
- WebGL2-Äquivalent: {{domxref("WebGL2RenderingContext.createVertexArray()")}}
