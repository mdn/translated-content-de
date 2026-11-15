---
title: "WebGL2RenderingContext: isVertexArray()-Methode"
short-title: isVertexArray()
slug: Web/API/WebGL2RenderingContext/isVertexArray
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.isVertexArray()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) ist.

## Syntax

```js-nolint
isVertexArray(vertexArray)
```

### Parameter

- `vertexArray`
  - : Ein [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO), das überprüft werden soll. Bei Übergabe von `null` wird `false` zurückgegeben.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das übergebene Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) ist (`true`) oder nicht (`false`).

## Beispiele

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.isVertexArray(vao);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)
