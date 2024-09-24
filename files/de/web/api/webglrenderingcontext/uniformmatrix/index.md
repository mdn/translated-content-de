---
title: "WebGLRenderingContext: uniformMatrix[234]fv()-Methode"
short-title: uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.uniformMatrix[234]fv()`**-Methoden
der [WebGL API](/de/docs/Web/API/WebGL_API) legen Matrixwerte für
Uniform-Variablen fest.

Die drei Versionen dieser Methode (`uniformMatrix2fv()`,
`uniformMatrix3fv()` und `uniformMatrix4fv()`) nehmen als Eingabewert
2-Komponenten-, 3-Komponenten- und 4-Komponenten-Quadratmatrizen, jeweils mit 4, 9 oder 16 Float-Werten.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, value)
uniformMatrix3fv(location, transpose, value)
uniformMatrix4fv(location, transpose, value)
```

### Parameter

- `location`
  - : Ein {{domxref("WebGLUniformLocation")}}-Objekt, das den Ort des zu modifizierenden Uniform-Attributs enthält. Der Ort wird mit
    {{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}} ermittelt.
- `transpose`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, das angibt, ob die Matrix transponiert werden soll. Muss
    `false` sein.
- `value`
  - : Ein {{jsxref("Float32Array")}} oder eine Sequenz von `GLfloat`-Werten. Es wird angenommen, dass die Werte in spaltenmajorer Ordnung bereitgestellt werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.uniformMatrix2fv(loc, false, [2, 1, 2, 2]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.uniform()")}}
- {{domxref("WebGL2RenderingContext.uniformMatrix()")}} – WebGL 2 Versionen dieser
  Methoden.
