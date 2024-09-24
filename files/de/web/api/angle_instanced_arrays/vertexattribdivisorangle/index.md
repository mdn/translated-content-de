---
title: "ANGLE_instanced_arrays: vertexAttribDivisorANGLE() Methode"
short-title: vertexAttribDivisorANGLE()
slug: Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("WebGL")}}

Die **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) ändert die Rate, mit der generische Vertex-Attribute voranschreiten, wenn mehrere Instanzen von Primitiven mit {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} und {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}} gerendert werden.

> [!NOTE]
> Bei Verwendung von {{domxref("WebGL2RenderingContext", "WebGL2")}} ist diese Methode standardmäßig als {{domxref("WebGL2RenderingContext.vertexAttribDivisor()", "gl.vertexAttribDivisor()")}} verfügbar.

## Syntax

```js-nolint
vertexAttribDivisorANGLE(index, divisor)
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
const ext = gl.getExtension("ANGLE_instanced_arrays");
ext.vertexAttribDivisorANGLE(0, 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
