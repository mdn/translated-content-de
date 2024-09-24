---
title: "WebGL2RenderingContext: Methode bindVertexArray()"
short-title: bindVertexArray()
slug: Web/API/WebGL2RenderingContext/bindVertexArray
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindVertexArray()`**-Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes
{{domxref("WebGLVertexArrayObject")}}-Objekt an den Puffer.

## Syntax

```js-nolint
bindVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein {{domxref("WebGLVertexArrayObject")}} (VAO)-Objekt, das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

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

- {{domxref("WebGLVertexArrayObject")}}
