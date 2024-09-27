---
title: "WebGLRenderingContext: uniformMatrix[234]fv()-Methode"
short-title: uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.uniformMatrix[234]fv()`**-Methoden
der [WebGL API](/de/docs/Web/API/WebGL_API) geben Matrixwerte für
Uniform-Variablen an.

Die drei Versionen dieser Methode (`uniformMatrix2fv()`,
`uniformMatrix3fv()` und `uniformMatrix4fv()`) nehmen als Eingabewert
jeweils 2-Komponenten-, 3-Komponenten- und 4-Komponenten-Quadratmatrizen entgegen. Sie sollen
4, 9 oder 16 Fließkommazahlen enthalten.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, value)
uniformMatrix3fv(location, transpose, value)
uniformMatrix4fv(location, transpose, value)
```

### Parameter

- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das den Speicherort des Uniform-Attributs enthält, das modifiziert werden soll. Der Speicherort wird mit
    [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) ermittelt.
- `transpose`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Matrix transponiert werden soll. Muss `false` sein.
- `value`
  - : Ein {{jsxref("Float32Array")}} oder eine Sequenz von `GLfloat`-Werten. Die Werte werden im spaltenbasierten Format angenommen.

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

- [`WebGLRenderingContext.uniform()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
- [`WebGL2RenderingContext.uniformMatrix()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix) – WebGL 2 Versionen dieser
  Methoden.
