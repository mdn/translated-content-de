---
title: "WebGL2RenderingContext: bindVertexArray()-Methode"
short-title: bindVertexArray()
slug: Web/API/WebGL2RenderingContext/bindVertexArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bindVertexArray()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt an den Puffer.

## Syntax

```js-nolint
bindVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekt, das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
