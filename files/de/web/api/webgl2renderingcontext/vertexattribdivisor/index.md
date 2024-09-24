---
title: "WebGL2RenderingContext: vertexAttribDivisor() Methode"
short-title: vertexAttribDivisor()
slug: Web/API/WebGL2RenderingContext/vertexAttribDivisor
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.vertexAttribDivisor()`** Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) modifiziert die Rate, mit welcher generische Vertex-Attribute voranschreiten, wenn bei der Wiedergabe von mehreren Instanzen von Primitiven die Methoden {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} und {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}} verwendet werden.

> [!NOTE]
> Wenn Sie {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} verwenden, kann die {{domxref("ANGLE_instanced_arrays")}} Erweiterung diese Methode ebenfalls bereitstellen.

## Syntax

```js-nolint
vertexAttribDivisor(index, divisor)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index der generischen Vertex-Attribute angibt.
- `divisor`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der die Anzahl der Instanzen angibt, die zwischen den Aktualisierungen des generischen Attributs vergehen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.vertexAttribDivisor(0, 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()")}}
