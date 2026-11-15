---
title: "WebGL2RenderingContext: Methode uniformMatrix[234]x[234]fv()"
short-title: uniformMatrix[234]x[234]fv()
slug: Web/API/WebGL2RenderingContext/uniformMatrix
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methoden **`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legen Matrixwerte für uniform-Variablen fest.

> [!NOTE]
> Es gibt keine `2x2`-, `3x3`- und `4x4`-Versionen dieser Methode. Sie werden stattdessen mit `2`, `3` beziehungsweise `4` bezeichnet. Siehe die Syntax unten.

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
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das die Position des zu ändernden uniform-Attributs enthält, oder `null`, um die Aktualisierung der uniform-Variablen ohne Fehlermeldung zu ignorieren.
- `transpose`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob die Matrix transponiert werden soll.
- `data`
  - : Ein {{jsxref("Float32Array")}} mit Gleitkommawerten.

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
