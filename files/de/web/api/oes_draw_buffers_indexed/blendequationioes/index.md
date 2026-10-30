---
title: "OES_draw_buffers_indexed: Methode blendEquationiOES()"
short-title: blendEquationiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `blendEquationiOES()` der WebGL-Erweiterung `OES_draw_buffers_indexed` legt sowohl die RGB- als auch die Alpha-Blending-Gleichung für einen bestimmten Zeichnungspuffer fest.

Informationen zum getrennten Festlegen der RGB- und Alpha-Blending-Gleichungen finden Sie unter [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES). Die WebGL-1-Version dieser Methode finden Sie unter [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation).

## Syntax

```js-nolint
blendEquationiOES(buf, mode)
```

### Parameter

- `buf`
  - : Eine Ganzzahl `i`, die den Zeichnungspuffer angibt, der der Konstante `gl.DRAW_BUFFERi` zugeordnet ist. Siehe [WebGL-Konstanten für Zeichnungspuffer](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, wie Quell- und Zielfarben kombiniert werden. Akzeptiert dieselben Enum-Werte wie der Parameter `mode` in [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `mode` keiner der möglichen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Blending-Gleichungen festlegen und abrufen

Sie können die Blending-Gleichungen für die Zeichnungspuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` wie folgt festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendEquationiOES(1, gl.FUNC_SUBTRACT);
```

Um die Blending-Gleichungen für die Zeichnungspuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
