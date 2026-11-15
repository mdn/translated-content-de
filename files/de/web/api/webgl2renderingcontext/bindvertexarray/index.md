---
title: "WebGL2RenderingContext: Methode bindVertexArray()"
short-title: bindVertexArray()
slug: Web/API/WebGL2RenderingContext/bindVertexArray
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bindVertexArray()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt an den Puffer.

## Syntax

```js-nolint
bindVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (VAO), das gebunden werden soll, oder `null`, um das Standard-Vertex-Array-Objekt zu binden.

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
