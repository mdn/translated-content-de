---
title: "WebGLRenderingContext: getVertexAttribOffset()-Methode"
short-title: getVertexAttribOffset()
slug: Web/API/WebGLRenderingContext/getVertexAttribOffset
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getVertexAttribOffset()`**-Methode des [WebGL-API](/de/docs/Web/API/WebGL_API) gibt die Adresse eines angegebenen Vertex-Attributs zurück.

## Syntax

```js-nolint
getVertexAttribOffset(index, pname)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Vertex-Attributs angibt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der `gl.VERTEX_ATTRIB_ARRAY_POINTER` sein muss.

### Rückgabewert

Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der die Adresse des Vertex-Attributs angibt.

## Beispiele

```js
gl.getVertexAttribOffset(i, gl.VERTEX_ATTRIB_ARRAY_POINTER);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
