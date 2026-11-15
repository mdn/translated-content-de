---
title: "WebGLRenderingContext: Methode uniformMatrix[234]fv()"
short-title: uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methoden **`WebGLRenderingContext.uniformMatrix[234]fv()`** der [WebGL API](/de/docs/Web/API/WebGL_API) legen Matrixwerte für Uniform-Variablen fest.

Die drei Versionen dieser Methode (`uniformMatrix2fv()`, `uniformMatrix3fv()` und `uniformMatrix4fv()`) erwarten als Eingabewerte quadratische Matrizen mit 2, 3 beziehungsweise 4 Komponenten pro Dimension. Diese müssen 4, 9 beziehungsweise 16 Gleitkommawerte enthalten.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, value)
uniformMatrix3fv(location, transpose, value)
uniformMatrix4fv(location, transpose, value)
```

### Parameter

- `location`
  - : Ein [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)-Objekt, das die Position der zu ändernden Uniform-Variable enthält, oder `null`, um die Aktualisierung der Uniform-Variable ohne Fehlermeldung zu ignorieren. Die Position wird mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) ermittelt.
- `transpose`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Matrix transponiert werden soll. Muss `false` sein.
- `value`
  - : Ein {{jsxref("Float32Array")}} oder eine Folge von `GLfloat`-Werten. Es wird angenommen, dass die Werte in spaltenweiser Reihenfolge vorliegen.

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
- [`WebGL2RenderingContext.uniformMatrix()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix) – WebGL-2-Versionen dieser Methoden.
