---
title: "WebGL2RenderingContext: Methode createVertexArray()"
short-title: createVertexArray()
slug: Web/API/WebGL2RenderingContext/createVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.createVertexArray()`**-Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
{{domxref("WebGLVertexArrayObject")}}-Objekt. Dieses Objekt repräsentiert ein Vertex Array Object (VAO),
das auf Vertex-Array-Daten verweist und Namen für verschiedene Sätze von Vertex-Daten bereitstellt.

## Syntax

```js-nolint
createVertexArray()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLVertexArrayObject")}}, das ein Vertex Array Object (VAO) darstellt und
auf Vertex-Array-Daten verweist.

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

// Aufrufe zu bindBuffer oder vertexAttribPointer
// die im VAO "gespeichert" werden

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLVertexArrayObject")}}
