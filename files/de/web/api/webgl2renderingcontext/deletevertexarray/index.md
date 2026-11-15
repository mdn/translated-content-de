---
title: "WebGL2RenderingContext: Methode deleteVertexArray()"
short-title: deleteVertexArray()
slug: Web/API/WebGL2RenderingContext/deleteVertexArray
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.deleteVertexArray()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt.

## Syntax

```js-nolint
deleteVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein zu löschendes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt (VAO). Die Übergabe von `null` hat keine Auswirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.deleteVertexArray(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)
