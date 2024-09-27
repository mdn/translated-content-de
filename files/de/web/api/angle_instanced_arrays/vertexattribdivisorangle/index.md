---
title: "ANGLE_instanced_arrays: vertexAttribDivisorANGLE() Methode"
short-title: vertexAttribDivisorANGLE()
slug: Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("WebGL")}}

Die **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) modifiziert die Rate, mit der generische Vertex-Attribute fortschreiten, wenn mehrere Instanzen von Primitiven mit [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) und [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) gerendert werden.

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor) verfügbar.

## Syntax

```js-nolint
vertexAttribDivisorANGLE(index, divisor)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index der generischen Vertex-Attribute angibt.
- `divisor`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen angibt, die zwischen den Updates des generischen Attributs verstreichen.

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

- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
