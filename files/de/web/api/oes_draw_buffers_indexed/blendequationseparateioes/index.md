---
title: "OES_draw_buffers_indexed: Methode blendEquationSeparateiOES()"
short-title: blendEquationSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `blendEquationSeparateiOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) legt die RGB- und Alpha-Blending-Gleichungen für einen bestimmten Zeichenpuffer getrennt fest.

Informationen zum gemeinsamen Festlegen von RGB und Alpha finden Sie unter [`OES_draw_buffers_indexed.blendEquationiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES). Die WebGL-1-Version dieser Methode ist [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate).

## Syntax

```js-nolint
blendEquationSeparateiOES(buf, modeRGB, modeAlpha)
```

### Parameter

- `buf`
  - : Eine Ganzzahl `i`, die den mit der Konstante `gl.DRAW_BUFFERi` verknüpften Zeichenpuffer angibt. Siehe [WebGL-Konstanten für Zeichenpuffer](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `modeRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die RGB-Farbkomponenten von Quelle und Ziel kombiniert werden. Akzeptiert dieselben Enum-Werte wie der Parameter `modeRGB` in [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate).
- `modeAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie die Alpha-Komponenten von Quelle und Ziel kombiniert werden. Akzeptiert dieselben Enum-Werte wie der Parameter `modeAlpha` in [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `modeRGB` oder `modeAlpha` nicht auf einen der möglichen Werte gesetzt ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Blending-Gleichungen festlegen und abfragen

Im Folgenden werden die Blending-Gleichungen für die Zeichenpuffer `gl.DRAW_BUFFER0` (Aufruf mit `buf` gleich 0) und `gl.DRAW_BUFFER1` (Aufruf mit `buf` gleich 1) festgelegt.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationSeparateiOES(0, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die Blending-Gleichungen für `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzufragen, verwenden Sie [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) mit den Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA`:

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
