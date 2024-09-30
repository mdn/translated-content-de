---
title: "WebGLRenderingContext: disableVertexAttribArray() Methode"
short-title: disableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/disableVertexAttribArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.disableVertexAttribArray()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) schaltet das generische Vertex-Attribut-Array an einer gegebenen Indexposition aus.

## Syntax

```js-nolint
disableVertexAttribArray(index)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu deaktivierenden Vertex-Attributs angibt.

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

- [`WebGLRenderingContext.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
