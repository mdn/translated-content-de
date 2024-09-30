---
title: "WebGL2RenderingContext: uniformMatrix[234]x[234]fv()-Methode"
short-title: uniformMatrix[234]x[234]fv()
slug: Web/API/WebGL2RenderingContext/uniformMatrix
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`**-Methoden der [WebGL 2 API](/de/docs/Web/API/WebGL_API) spezifizieren Matrixwerte für uniforme Variablen.

> [!NOTE]
> Es gibt keine `2x2`, `3x3` und `4x4` Versionen
> dieser Methode. Sie werden in `2`, `3` und `4`
> abgekürzt. Siehe die Syntax unten.

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
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das den Speicherort des zu ändernden Uniform-Attributs enthält.
- `transpose`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Matrix transponiert werden soll.
- `data`
  - : Ein {{jsxref("Float32Array")}} aus Float-Werten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.uniformMatrix2x3fv(loc, false, [1, 2, 3, 4, 5, 6]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.uniformMatrix()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
