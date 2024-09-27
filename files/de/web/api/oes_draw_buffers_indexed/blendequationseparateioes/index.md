---
title: "OES_draw_buffers_indexed: blendEquationSeparateiOES() Methode"
short-title: blendEquationSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `blendEquationSeparateiOES()`-Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung setzt die RGB- und Alpha-Blend-Gleichungen separat für einen bestimmten Zeichnungspuffer.

Siehe [`OES_draw_buffers_indexed.blendEquationiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES) für das Setzen von RGB und Alpha zusammen und [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendEquationSeparateiOES(buf, modeRGB, modeAlpha)
```

### Parameter

- `buf`
  - : Eine ganze Zahl `i`, die den Zeichnungspuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` assoziiert ist, siehe [WebGL-Zeichnungspufferkonstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `modeRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Quellen- und Ziel-RGB-Farbkomponenten kombiniert werden. Akzeptiert die gleichen Enums wie der `modeRGB` Parameter in [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate).
- `modeAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Quellen- und Ziel-Alpha-Farbkomponenten kombiniert werden. Akzeptiert die gleichen Enums wie der `modeAlpha` Parameter in [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` keinen gültigen Wert hat, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.
- Wenn `modeRGB` oder `modeAlpha` nicht auf einen der möglichen Werte gesetzt sind, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

### Setzen und Abfragen von Blend-Gleichungen

Das folgende Beispiel setzt die Blend-Gleichungen für die Zeichnungspuffer `gl.DRAW_BUFFER0` (Aufruf mit `buf` gleich 0) und `gl.DRAW_BUFFER1` (Aufruf mit `buf` gleich 1).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationSeparateiOES(0, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die Blend-Gleichungen für `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// for gl.DRAW_BUFFER1
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.blendEquationiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES)
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
