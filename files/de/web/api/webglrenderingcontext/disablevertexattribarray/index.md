---
title: "WebGLRenderingContext: Methode disableVertexAttribArray()"
short-title: disableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/disableVertexAttribArray
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.disableVertexAttribArray()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) schaltet das generische Vertex-Attribut-Array an einer angegebenen Indexposition aus.

## Syntax

```js-nolint
disableVertexAttribArray(index)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Index des zu deaktivierenden Vertex-Attributs angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.disableVertexAttribArray(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
