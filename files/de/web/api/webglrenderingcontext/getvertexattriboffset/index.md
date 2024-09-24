---
title: "WebGLRenderingContext: Methode getVertexAttribOffset()"
short-title: getVertexAttribOffset()
slug: Web/API/WebGLRenderingContext/getVertexAttribOffset
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getVertexAttribOffset()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt die Adresse eines angegebenen Vertex-Attributs zurück.

## Syntax

```js-nolint
getVertexAttribOffset(index, pname)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Index des Vertex-Attributs angibt.
- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das `gl.VERTEX_ATTRIB_ARRAY_POINTER` sein muss.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der die Adresse des Vertex-Attributs angibt.

## Beispiele

```js
gl.getVertexAttribOffset(i, gl.VERTEX_ATTRIB_ARRAY_POINTER);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
