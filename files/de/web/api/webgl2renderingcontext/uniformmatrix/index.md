---
title: "WebGL2RenderingContext: uniformMatrix[234]x[234]fv()-Methode"
short-title: uniformMatrix[234]x[234]fv()
slug: Web/API/WebGL2RenderingContext/uniformMatrix
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`**-Methoden der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legen Matrixwerte für Uniformvariablen fest.

> [!NOTE]
> Es gibt keine `2x2`-, `3x3`- und `4x4`-Versionen
> dieser Methode. Sie sind in `2`, `3` und
> `4` abgekürzt. Siehe die Syntax unten.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, data)
uniformMatrix2fv(location, transpose, data, srcOffset)
uniformMatrix2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3x2fv(location, transpose, data)
uniformMatrix3x2fv(location, transpose, data, srcOffset)
uniformMatrix3x2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4x2fv(location, transpose, data)
uniformMatrix4x2fv(location, transpose, data, srcOffset)
uniformMatrix4x2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix2x3fv(location, transpose, data)
uniformMatrix2x3fv(location, transpose, data, srcOffset)
uniformMatrix2x3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3fv(location, transpose, data)
uniformMatrix3fv(location, transpose, data, srcOffset)
uniformMatrix3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4x3fv(location, transpose, data)
uniformMatrix4x3fv(location, transpose, data, srcOffset)
uniformMatrix4x3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix2x4fv(location, transpose, data)
uniformMatrix2x4fv(location, transpose, data, srcOffset)
uniformMatrix2x4fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3x4fv(location, transpose, data)
uniformMatrix3x4fv(location, transpose, data, srcOffset)
uniformMatrix3x4fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4fv(location, transpose, data)
uniformMatrix4fv(location, transpose, data, srcOffset)
uniformMatrix4fv(location, transpose, data, srcOffset, srcLength)
```

### Parameter

- `location`
  - : Ein {{domxref("WebGLUniformLocation")}}-Objekt, das die Position des zu ändernden Uniformattributs enthält.
- `transpose`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die Matrix transponiert werden soll.
- `data`
  - : Ein {{jsxref("Float32Array")}} von Gleitkommawerten.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
gl.uniformMatrix2x3fv(loc, false, [1, 2, 3, 4, 5, 6]);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
