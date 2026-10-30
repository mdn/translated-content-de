---
title: "ANGLE_instanced_arrays: Methode vertexAttribDivisorANGLE()"
short-title: vertexAttribDivisorANGLE()
slug: Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** der [WebGL-API](/de/docs/Web/API/WebGL_API) legt fest, in welchem Abstand generische Vertex-Attribute beim Rendern mehrerer Instanzen von Primitiven mit [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) und [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) aktualisiert werden.

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor) verfügbar.

## Syntax

```js-nolint
vertexAttribDivisorANGLE(index, divisor)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des generischen Vertex-Attributs angibt.
- `divisor`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie viele Instanzen zwischen zwei Aktualisierungen des generischen Attributs liegen.

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
