---
title: "WebGLRenderingContext: `uniformMatrix[234]fv()` Methode"
short-title: uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.uniformMatrix[234]fv()`** Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen Matrixwerte für Uniform-Variablen fest.

Die drei Versionen dieser Methode (`uniformMatrix2fv()`, `uniformMatrix3fv()` und `uniformMatrix4fv()`) nehmen als Eingabewert jeweils 2-Komponenten-, 3-Komponenten- und 4-Komponenten-Quadratmatrizen. Diese sollen 4, 9 oder 16 Floats haben.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, value)
uniformMatrix3fv(location, transpose, value)
uniformMatrix4fv(location, transpose, value)
```

### Parameter

- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das den Speicherort des Uniform-Attributs enthält, das modifiziert werden soll. Der Speicherort wird mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) erhalten.
- `transpose`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Matrix transponiert werden soll. Muss `false` sein.
- `value`
  - : Ein {{jsxref("Float32Array")}} oder eine Sequenz von `GLfloat`-Werten. Es wird angenommen, dass die Werte in spaltenmajorer Reihenfolge geliefert werden.

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
- [`WebGL2RenderingContext.uniformMatrix()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix) – WebGL 2 Versionen dieser Methoden.
