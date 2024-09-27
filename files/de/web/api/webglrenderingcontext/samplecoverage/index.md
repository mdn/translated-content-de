---
title: "WebGLRenderingContext: sampleCoverage()-Methode"
short-title: sampleCoverage()
slug: Web/API/WebGLRenderingContext/sampleCoverage
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.sampleCoverage()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt Multi-Sample-Coverage-Parameter für Anti-Aliasing-Effekte fest.

## Syntax

```js-nolint
sampleCoverage(value, invert)
```

### Parameter

- `value`
  - : Ein [`GLclampf`](/de/docs/Web/API/WebGL_API/Types), der einen einzelnen Gleitkomma-Coverage-Wert festlegt, der auf den Bereich \[0,1] begrenzt ist. Der Standardwert ist 1.0.
- `invert`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der festlegt, ob die Coverage-Masken invertiert werden sollen oder nicht. Der Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Multi-Sampling ist standardmäßig deaktiviert. Um Multi-Sampling zu aktivieren oder zu deaktivieren, verwenden Sie die Methoden [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und [`disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) mit dem Argument `gl.SAMPLE_COVERAGE` und `gl.SAMPLE_ALPHA_TO_COVERAGE`.

```js
gl.enable(gl.SAMPLE_COVERAGE);
gl.sampleCoverage(0.5, false);
```

Um die Sample-Coverage-Werte zu überprüfen, fragen Sie die Konstanten `SAMPLE_COVERAGE_VALUE` und `SAMPLE_COVERAGE_INVERT` ab.

```js
gl.getParameter(gl.SAMPLE_COVERAGE_VALUE); // 0.5
gl.getParameter(gl.SAMPLE_COVERAGE_INVERT); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) – `antialias`-Parameter für den Kontext.
