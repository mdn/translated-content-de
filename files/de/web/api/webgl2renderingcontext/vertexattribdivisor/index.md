---
title: "WebGL2RenderingContext: vertexAttribDivisor()-Methode"
short-title: vertexAttribDivisor()
slug: Web/API/WebGL2RenderingContext/vertexAttribDivisor
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.vertexAttribDivisor()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) verändert die Rate, mit der generische Vertex-Attribute fortschreiten, wenn mehrere Instanzen von Primitives gerendert werden, mit [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) und [`gl.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced).

> [!NOTE]
> Bei der Verwendung von {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} kann die [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)-Erweiterung diese Methode ebenfalls bereitstellen.

## Syntax

```js-nolint
vertexAttribDivisor(index, divisor)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index der generischen Vertex-Attribute angibt.
- `divisor`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen angibt, die zwischen
    den Aktualisierungen des generischen Attributs vergehen.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

```js
gl.vertexAttribDivisor(0, 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ANGLE_instanced_arrays.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
